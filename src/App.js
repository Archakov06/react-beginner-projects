import React from 'react';
import './index.scss';

function App() {
    const [open, setOpen] = React.useState(false)

  return (
      <div className="App">
          <button
              onClick={() => setOpen(true)}
              className="open-modal-btn">✨ Открыть модальное окно
          </button>

          {/*open && (
                // Минус данного метода - не работает с анимацией (резко открывает окно и резко закрывается)
                <div className="overlay">
                    <div className="modal">
                        <svg
                            onClick={() => setOpen(false)}
                            height="200" viewBox="0 0 200 200" width="200">
                            <title/>
                            <path
                                d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                        </svg>
                        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
                    </div>
                </div>
            )*/}

          {/* Если у нас в const использует open, то к нему прикрутятся дополнительные стили по типу show, а если
            он закрыт, то выведет значение false (React.useState) */}
          <div className={`overlay animated ${open ? 'show' : ''}`}>

              <div className="modal">
                  <svg
                      onClick={() => setOpen(false)}
                      height="300"
                      viewBox="0 0 200 200"
                      width="300">

                      <title/>

                      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                  </svg>

                  <img src="https://media.giphy.com/media/5yccPytI1wapjfrq0V/giphy.gif"/>
              </div>
          </div>
      </div>
  );
}

export default App;
