import React, {useState} from 'react';
import './index.scss';
import Modal from "./components/Modal";

function App() {
    const[isShowModal,setIsShowModal]=useState(false);
    const toggleModal=()=>{
        setIsShowModal((prevState => !isShowModal));
    }
    return (
        <div className="App">
            <button className="open-modal-btn" onClick={toggleModal}>✨ Открыть окно</button>
            <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} toggleModal={toggleModal}></Modal>
        </div>
    );
}

export default App;
