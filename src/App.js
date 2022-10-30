import React, { useState } from 'react';
import './index.scss';

const Modal = (props) => {
  return (
    <div className={`overlay animated ${props.isTrue ? 'show' : ''}`}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={props.closeBtn}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
    </div>
  )
}

//рендер без анимации
/*function App() {
  const [isTrue, setOpen] = React.useState(false);

  const toggleState = () => {
    setOpen(!isTrue)
  }

  const closeBtn = () => {
    setOpen(!isTrue)
  }
  
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={toggleState}>✨ Открыть окно</button>
      {isTrue && <Modal closeBtn={closeBtn}/>}
    </div>
  );
}*/

//рендер с анимацией
function App() {
  const [isTrue, setOpen] = React.useState(false);

  const toggleState = () => {
    setOpen(!isTrue)
  }

  const closeBtn = () => {
    setOpen(!isTrue)
  }
  
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={toggleState}>✨ Открыть окно</button>
      {<Modal closeBtn={closeBtn} isTrue={isTrue}/>}
    </div>
  );
}

/*class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isTrue: false};
    this.toggleState = this.toggleState.bind(this);
    this.closeBtn = this.closeBtn.bind(this);
  }

  toggleState = () => {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

  closeBtn = () => {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

  render() {
    return (
      (
        <div className="App">
          <button className="open-modal-btn" onClick={this.toggleState}>✨ Открыть окно</button>
          {this.state.isTrue  && (
            <div className="overlay">
            <div className="modal">
              <svg height="200" viewBox="0 0 200 200" width="200" onClick={this.closeBtn}>
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
            </div>
          </div>)
          }
        </div>
      )
    )
  }
}*/

export default App;
