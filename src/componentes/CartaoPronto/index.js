import React, { useState } from 'react';
import './cartaopronto.css';


const CartaoPronto = () => {
    const [number, setNumber] = useState('**** **** **** ****');
    const [name, setName] = useState('Nome Impresso');
    const [date, setDate] = useState('00/00');

    return (
        <>
            <div className="card edit card__master">
                <div className="flag">
                    <span className="flag__image master"></span>
                </div>

                <div className="card__number">
                    <span className="text">{"1234 4444 1233 1233"}</span>
                </div>

                <div className="card__info">
                    <div className="card__info--name">
                        <span className="title">Nome</span>
                        <span className="text small">{"Lucas Santos"}</span>
                    </div>

                    <div className="card__info--date">
                        <span className="title">Validade</span>
                        <span className="text small">{"12/29"}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartaoPronto