import React from 'react';
import { useAcessibilidade } from './AcessibilidadeProvider';

const SeuComponente = () => {
    const { contraste, toggleContraste, aumentarFonte, diminuirFonte } = useAcessibilidade();

    return (
        <div>
            {contraste ? (
                <button onClick={toggleContraste} id="btn-contraste-off">SEM CONTRASTE</button>
            ) : (
                <button onClick={toggleContraste} id="btn-contraste-on">CONTRASTE PRETO</button>
            )}
            <button onClick={aumentarFonte}>A+</button>
            <button onClick={diminuirFonte}>A-</button>
        </div>
    );
};

export default SeuComponente;
