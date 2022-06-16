import React from 'react';
import { MovieCard } from '../components/Card';
import axios from 'axios';
import { TextField } from '@mui/material';

export const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://61db06d64593510017aff7a8.mockapi.io/movies').then(({ data }) => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        variant="outlined"
        placeholder="Найти фильм..."
      />
      <br />
      <br />
      <div className="movies">
        {movies
          .filter((obj) => obj.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
          .map((obj) => (
            <MovieCard
              key={obj.id}
              id={obj.id}
              title={obj.title}
              imageUrl={obj.imageUrl}
              description={obj.description}
            />
          ))}
      </div>
    </>
  );
};
