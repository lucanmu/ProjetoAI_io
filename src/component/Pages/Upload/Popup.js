import React from 'react';

const Popup = ({ transcription, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Transcrição Concluída</h2>
                <p>{transcription}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Popup;