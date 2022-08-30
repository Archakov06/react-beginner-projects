

function Game({question,onClickAnswer,step,questions}) {
    const persentage = Math.round(step/questions.length*100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((answ,index)=><li onClick={()=>onClickAnswer(index)} key={answ}>{answ}</li>)}
            </ul>
        </>
    );
}

export default Game;