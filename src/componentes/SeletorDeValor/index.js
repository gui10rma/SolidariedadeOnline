import React, { useState } from 'react';
import './seletordevalor.css';

function SeletorDeValor() {
    const [valorSelecionado, setValorSelecionado] = useState('R$10');

    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    return (
        <div className='seletor'>
            <label className='label'>Selecione o valor:</label><br />
            <label>
                <input
                    type="radio"
                    value="R$10"
                    checked={valorSelecionado === 'R$10'}
                    onChange={handleChange}
                />
                R$10
            </label><br />
            <label>
                <input
                    type="radio"
                    value="R$20"
                    checked={valorSelecionado === 'R$20'}
                    onChange={handleChange}
                />
                R$20
            </label><br />
            <label>
                <input
                    type="radio"
                    value="R$50"
                    checked={valorSelecionado === 'R$50'}
                    onChange={handleChange}
                />
                R$50
            </label><br />
            <label>
                <input
                    type="radio"
                    value="R$100"
                    checked={valorSelecionado === 'R$100'}
                    onChange={handleChange}
                />
                R$100
            </label><br />
            <p>Valor selecionado: {valorSelecionado}</p>
        </div>
    );
}

export default SeletorDeValor;
