import React, { useState } from 'react';

interface ModalProps {
    title?: string;
    openModalButtonTitle: string;
    openModalButtonClass?: string;
}

const Modal: React.FC<ModalProps> = ({ openModalButtonTitle, title, openModalButtonClass, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div style={{display: 'inline', zIndex: 1}}>
            <button className={`btn btn-${ openModalButtonClass }`} onClick={() => setModalOpen(true)}>{openModalButtonTitle}</button>

            <div className={`modal ${modalOpen? 'active' : ''}`} id={`modal-${title}`}>
                <span onClick={() => setModalOpen(false)} className="modal-overlay" aria-label="Close"></span>
                <div className="modal-container">
                    <div className="modal-header">
                        <span onClick={() => setModalOpen(false)} className="btn btn-clear float-right" aria-label="Close"></span>
                        <div className="modal-title h5">{title}</div>
                    </div>
                    <div className="content container">
                        {children}
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    );
}

export default Modal;