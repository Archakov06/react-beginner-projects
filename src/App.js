import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="banner__inner">
          <img src="/chat.png" />
          <h2>Общайся с друзьями</h2>
          <p>Быстрый и удобный чат для общения с друзьями или коолегами по работе</p>
        </div>
      </div>
      <div className="form">
        <div className="form__content">
          <h2>Регистрация</h2>
          <p>Для того, чтобы войти в чат, необходимо произвести авторизоваться</p>
          <div className="form__field">
            <input type="text" name="email" placeholder="E-Mail" />
            <svg className="check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z" />
            </svg>
          </div>
          <div className="form__field error">
            <input type="text" name="fullName" placeholder="Полное имя" />
            <span>Укажите полное имя</span>
          </div>
          <div className="form__field">
            <input type="password" name="password" placeholder="Пароль" />
            <svg className="eye" height="24px" viewBox="0 0 24 24" width="24px">
              <path d="M21.821,12.43c-0.083-0.119-2.062-2.944-4.793-4.875C15.612,6.552,13.826,6,12,6c-1.825,0-3.611,0.552-5.03,1.555  c-2.731,1.931-4.708,4.756-4.791,4.875c-0.238,0.343-0.238,0.798,0,1.141c0.083,0.119,2.06,2.944,4.791,4.875  C8.389,19.448,10.175,20,12,20c1.826,0,3.612-0.552,5.028-1.555c2.731-1.931,4.71-4.756,4.793-4.875  C22.06,13.228,22.06,12.772,21.821,12.43z M12,16.5c-1.934,0-3.5-1.57-3.5-3.5c0-1.934,1.566-3.5,3.5-3.5c1.93,0,3.5,1.566,3.5,3.5  C15.5,14.93,13.93,16.5,12,16.5z" />
              <g>
                <path d="M14,13c0,1.102-0.898,2-2,2c-1.105,0-2-0.898-2-2c0-1.105,0.895-2,2-2C13.102,11,14,11.895,14,13z" />
              </g>
            </svg>
          </div>
          <div className="form__field">
            <input type="password" name="password2" placeholder="Пароль" />
            <svg className="eye" height="24px" viewBox="0 0 24 24" width="24px">
              <path d="M21.821,12.43c-0.083-0.119-2.062-2.944-4.793-4.875C15.612,6.552,13.826,6,12,6c-1.825,0-3.611,0.552-5.03,1.555  c-2.731,1.931-4.708,4.756-4.791,4.875c-0.238,0.343-0.238,0.798,0,1.141c0.083,0.119,2.06,2.944,4.791,4.875  C8.389,19.448,10.175,20,12,20c1.826,0,3.612-0.552,5.028-1.555c2.731-1.931,4.71-4.756,4.793-4.875  C22.06,13.228,22.06,12.772,21.821,12.43z M12,16.5c-1.934,0-3.5-1.57-3.5-3.5c0-1.934,1.566-3.5,3.5-3.5c1.93,0,3.5,1.566,3.5,3.5  C15.5,14.93,13.93,16.5,12,16.5z" />
              <g>
                <path d="M14,13c0,1.102-0.898,2-2,2c-1.105,0-2-0.898-2-2c0-1.105,0.895-2,2-2C13.102,11,14,11.895,14,13z" />
              </g>
            </svg>
          </div>
          <div className="form__additional">
            <div>
              <input class="styled-checkbox" id="checkbox" type="checkbox" value="value1" />
              <label for="checkbox">Запомнить</label>
            </div>
            <a>Забыл пароль?</a>
          </div>

          <button>Войти</button>
        </div>
      </div>
    </div>
  );
}

export default App;
