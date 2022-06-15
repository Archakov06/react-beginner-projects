import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="top">
        <ul className="tabs">
          <li className="active">Все</li>
          <li>Открытые</li>
          <li>Завершённые</li>
        </ul>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
        </svg>
      </div>
      <div className="item">
        <input class="styled-checkbox" id="checkbox2" type="checkbox" value="value1" />
        <label for="checkbox2" />
        <div className="item__content">
          <b>Это еще одна задача</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus
            reprehenderit suscipit.
          </p>
          <div className="item__bottom">
            <ul>
              <li>
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 70 70">
                  <path d="M51,19h-4v-4h-4v4H27v-4h-4v4h-4c-2.209,0-4,1.791-4,4v28c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V23   C55,20.791,53.209,19,51,19z M51,51H19V31h32V51z M51,27H19v-4h32V27z" />
                  <rect height="4" width="4" x="35" y="35" />
                  <rect height="4" width="4" x="43" y="35" />
                  <rect height="4" width="4" x="35" y="43" />
                  <rect height="4" width="4" x="27" y="43" />
                </svg>
                <span>15 июня 2022 год.</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
                </svg>
              </li>
              <li>
                <svg viewBox="0 0 18 18">
                  <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                    <g fill="#000000" id="Core" transform="translate(-213.000000, -129.000000)">
                      <g id="create" transform="translate(213.000000, 129.000000)">
                        <path
                          d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="form__checkbox">
          <input class="styled-checkbox" id="add-checkbox" type="checkbox" value="value1" />
          <label for="add-checkbox" />
        </div>
        <div class="form__fields">
          <input type="text" placeholder="Название" className="input-title" />
          <input type="text" placeholder="Введите текст..." className="input-text" />
        </div>
        <svg height="32px" viewBox="0 0 512 512" width="32px">
          <g>
            <g>
              <g>
                <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z" />
              </g>
            </g>
            <g>
              <polygon points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   " />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
