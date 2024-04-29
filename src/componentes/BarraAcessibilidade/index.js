import React from 'react';
import './BarraAcessibilidade.css'; // Importe o arquivo CSS para estilização

const BarraAcessibilidade = () => {
    return(
    <div className="barra_acessibilidade">
        <div>
            <a tabindex="1" href="#menu">[1] ir para o menu</a>
            <a tabindex="2" href="#conteudo">[2] ir para o conteudo</a>
            <a tabindex="3" href="#rodape">[3] ir para o rodape</a>        
            <a tabindex="4" href="acessibilidade.html">ACESSIBILIDADE</a>
            <span tabindex="5" id="btn-contraste-on">CONTRASTE PRETO</span>
            <span tabindex="6" id="btn-contraste-off">SEM CONTRASTE</span>
            <span tabindex="7" id="btn-font-plus" onclick="increaseFont()">A+</span>
            <span tabindex="8" id="btn-font-minus" onclick="decreaseFont()">A-</span>
        </div>
    </div>
    )
};

export default BarraAcessibilidade;