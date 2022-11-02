import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useEffect } from 'react';
import { useState } from 'react';
//
// Тут список пользователей: https://reqres.in/api/users

function App() {
  const link = 'https://reqres.in/api/users';
  const [items, setItems] = useState(0);

  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(json => {
        setItems(json.data);
        console.log(json.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <Users items={items} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
