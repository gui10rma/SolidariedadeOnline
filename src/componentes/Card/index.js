// Card.js
import React from "react";
import "./card.css";

const Card = ({ ong }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={ong.imagem} alt={ong.nome} />
            </div>
            <div className="rodape">
                <h4>{ong.nome}</h4>
                <h5>{ong.descricao}</h5>
            </div>
        </div>
    );
};

export default Card;

