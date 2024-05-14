// Card.js
import React from "react";
import "./card.css";

const Card = (props) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={props.imagem} alt={props.Razãosocial} />
            </div>
            <div className="rodape">
                <h4>{props.Razãosocial}</h4>
                <h5>{props.descricao}</h5>
            </div>
        </div>
    );
};

export default Card;

