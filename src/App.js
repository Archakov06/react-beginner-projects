import React from 'react';
import './index.scss';
<<<<<<< HEAD
//
=======
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useEffect } from 'react';
import { useState } from 'react';
//
// Тут список пользователей: https://reqres.in/api/users

>>>>>>> 880e359fc488559215b75c46986a6973e9cc58ee
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
<<<<<<< HEAD
      <button className='open-modal-btn'>✨ Открыть окно</button>
      {/* <div className="overlay">
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> */}
=======
      <Users items={items} />
      {/* <Success /> */}
>>>>>>> 880e359fc488559215b75c46986a6973e9cc58ee
    </div>
  );
}

export default App;
