import React from 'react';

const Modal = ({isShowModal,setIsShowModal,toggleModal,children}) => {
    return (
        <div className={`overlay animated ${isShowModal?'show':''}`}>
            <div className="modal">
                <svg height="200" viewBox="0 0 200 200" width="200" onClick={toggleModal}>
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <img src="https://i.pinimg.com/originals/93/00/34/930034b1695d21f650f9fb514ee36d05.jpg" />
                {children}
            </div>
        </div>
    );
};

export default Modal;