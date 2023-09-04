import React, { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import './index.scss';
import Collection from './Collection';

const activities = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function App() {
  const [collection, setCollection] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryID, setCategoryID] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryID ? `category=${categoryID}` : '';
    const pageParams = `page=${page}&limit=3&${category}`;

    fetch(
      `https://64f5b95c2b07270f705d94c8.mockapi.io/photo_collection?${pageParams}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error fetching collection');
      })
      .finally(() => setIsLoading(false));
  }, [categoryID, page]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {activities.map((data, i) => (
            <li
              onClick={() => setCategoryID(i)}
              className={categoryID === i ? 'active' : ''}
              key={uniqueId()}
            >
              {data.name}
            </li>
          ))}
        </ul>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          collection
            .filter((data) =>
              data.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((data) => (
              <Collection
                key={uniqueId()}
                name={data.name}
                images={data.photos}
              />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
