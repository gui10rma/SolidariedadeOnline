import React from 'react';
import './botao3.css';

const Botao3 = (props) => {
    const { texto, background, hoverBackground } = props;

    return (
        <button className='botao2' style={{ backgroundColor: background, '--hover-background': hoverBackground }}>
            {texto}
        </button>
    );
}

export default Botao3;