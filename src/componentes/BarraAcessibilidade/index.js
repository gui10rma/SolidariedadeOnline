import React, { useState, useEffect } from 'react';
import './BarraAcessibilidade.css'; // Importe o arquivo CSS para estilização

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
    };


    return(
    <div className="barra_acessibilidade">
        <div>
            <a href="#menu">[1] Ir para o menu</a>
            <a href="#conteudo">[2] Ir para o conteúdo</a>
            <a href="#rodape">[3] Ir para o rodapé</a>
            <a href="acessibilidade.html">Acessibilidade</a>
            <button onClick={toggleContraste} id="btn-contraste-on">CONTRASTE PRETO</button>
            <button onClick={toggleContraste} id="btn-contraste-off">SEM CONTRASTE</button>
            <button onClick={aumentarFonte}>A+</button>
            <button onClick={diminuirFonte}>A-</button>
        </div>
    </div>
    )
};

export default BarraAcessibilidade;