import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это когда на ты никому не нужен</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
