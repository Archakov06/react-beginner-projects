import './index.scss';
import {useState} from "react";
import Game from "./components/Game";
import Result from "./components/Result";

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


function App() {
    const [step, setStep] = useState(0);
    const question = questions[step];
    const [correct, setCorrect] = useState(0);
    const onClickAnswer = (index) => {
        setStep(prevState => step + 1)
        if (index === question.correct) {
            setCorrect(prevState => correct + 1);
        }
    }
    return (
        <div className="App">
            {step !== questions.length
                ? <Game questions={questions} step={step} question={question} onClickAnswer={onClickAnswer}/>
                : <Result correct={correct} questions={questions}/>
            }
        </div>
    );
}

export default App;
