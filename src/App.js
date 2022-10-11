import { useState } from 'react';
import './index.scss';

const questions = [
    {
        title: 'React - это ... ?',
        variants: [
            'библиотека',
            'фреймворк',
            'приложение'
        ],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: [
            'приложение',
            'часть приложения или страницы',
            'то, что я не знаю что такое',
        ],
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

function Result({ correct }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="You winner images" />

            <h2> Вы отгадали {correct} ответа из {questions.length} </h2>

            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickVariant }) {
    // В дальнейшем - необходимо будет разделить шаги на вопросы, а затем умножить на 100 и получить округленное число
    // Она необходимо нам для вверхней части квиза
    const procentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${procentage}%` }}  className="progress__inner"></div>
            </div>

            <h1>{question.title}</h1>

            <ul>
                {question.variants.map((text, index) => (
                    // При клике будет выводится новый вопрос по индексу
                    <li
                        onClick={() => onClickVariant(index)}
                        key={text}> {text}
                    </li>
                ))}
            </ul>
        </>
    );
}


function App() {
    // Шаг
    const [step, setStep] = useState(0);
    // Проверка верного ответа
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

  return (
    <div className="App">
        {step !== questions.length
            ? ( <Game step={step} question={question} onClickVariant={onClickVariant}/>)
            : ( <Result correct={correct} />)
        }
    </div>
  );
}

export default App;
