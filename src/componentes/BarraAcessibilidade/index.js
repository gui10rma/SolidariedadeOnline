import React, { useState } from 'react';
import './BarraAcessibilidade.css';

const BarraAcessibilidade = () => {
    const aumentarFonte = () => {
        const body = document.querySelector('body');
        const currentFontSize = window.getComputedStyle(body).fontSize;
        const currentFontSizeValue = parseFloat(currentFontSize);
        body.style.fontSize = (currentFontSizeValue + 1) + 'px';
    };

    const diminuirFonte = () => {
        const body = document.querySelector('body');
        const currentFontSize = window.getComputedStyle(body).fontSize;
        const currentFontSizeValue = parseFloat(currentFontSize);
        body.style.fontSize = (currentFontSizeValue - 1) + 'px';
    };

    const [contraste, setContraste] = useState(false);

    const toggleContraste = () => {
        setContraste(!contraste);
        document.body.classList.toggle('alto-contraste');
    };

    return (
        <div className={`barra_acessibilidade ${contraste ? 'contraste' : ''}`}>
            <div>
                <button onClick={toggleContraste} className="botao">CONTRASTE</button>
                <button onClick={aumentarFonte} className="botao">A+</button>
                <button onClick={diminuirFonte} className="botao">A-</button>
            </div>
        </div>
    );
};

export default BarraAcessibilidade;
