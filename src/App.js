import './index.scss';

function App() {
  return (
    <div className="App">
      <span className="subtitle">Пароль:</span>
      <h2>2UYsAhMdPR7wBHwG</h2>
      <div className="row">
        <span>Длина паролья:</span>
        <input className="pwg-length" type="text" value="10" />
      </div>
      <div className="row">
        <span>Прописные буквы:</span>
        <input class="styled-checkbox" id="checkbox1" type="checkbox" value="value1" />
        <label for="checkbox1" />
      </div>
      <div className="row">
        <span>Строчные буквы:</span>
        <input
          checked={true}
          class="styled-checkbox"
          id="checkbox2"
          type="checkbox"
          value="value1"
        />
        <label for="checkbox2" />
      </div>
      <div className="row">
        <span>Цифры:</span>
        <input class="styled-checkbox" id="checkbox3" type="checkbox" value="value1" />
        <label for="checkbox3" />
      </div>
      <div className="row">
        <span>Символы:</span>
        <input class="styled-checkbox" id="checkbox4" type="checkbox" value="value1" />
        <label for="checkbox4" />
      </div>
      <button>Сгенерировать</button>
    </div>
  );
}

export default App;
