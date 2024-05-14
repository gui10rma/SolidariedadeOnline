import React, { useState, createContext, useContext } from 'react';

const AcessibilidadeContext = createContext();

export const useAcessibilidade = () => useContext(AcessibilidadeContext);

const AcessibilidadeProvider = ({ children }) => {
    const [contraste, setContraste] = useState(false);

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

    const toggleContraste = () => {
        setContraste(!contraste);
    };

    return (
        <AcessibilidadeContext.Provider value={{ contraste, toggleContraste, aumentarFonte, diminuirFonte }}>
            {children}
        </AcessibilidadeContext.Provider>
    );
};

export default AcessibilidadeProvider;
