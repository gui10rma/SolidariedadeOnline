// Categorias.js
import React, { useEffect, useState } from "react";
import BarraAcessibilidade from "../BarraAcessibilidade";
import Card from "../Card";
import DropdownCategoria from "../DropCategorias";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./categoria.css";
import Botao2 from "../Botao2";

function Categorias() {

    const Categorias = [
        "Animais",
        "Meio Ambiente",
        "Criança e Adolescente",
        "LGBTQIA+",
        "Idosos",
        "Pessoas com Deficiência",
        "Justiça Social"
    ];

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);


    const handleCategoriaChange = (categoria) => {
        console.log("Categoria selecionada:", categoria);
        setCategoriaSelecionada(categoria);
    };



    return (
        <div className="Categorias">
            <BarraAcessibilidade />
            <NavBar />
            <DropdownCategoria itens={Categorias} onCategoriaChange={handleCategoriaChange} />
            <div className="CardsContainer">
                <Card Razãosocial="Sorisso de criança" imagem="/imagens/ImagemPrincipal.png" descricao="Garantir que todas as crianças tenham acesso a direitos básicos, como educação de qualidade, alimentação adequada, cuidados médicos e proteção contra qualquer forma de violência." />
                <Card Razãosocial="Sorisso de Prata" imagem="/imagens/ImagemPrincipal3.png" descricao="Promover o bem-estar, dignidade e qualidade de vida dos idosos, proporcionando cuidados integrais e atividades que estimulem o corpo, a mente e o espírito." />
                <Card Razãosocial="Casa dos peludos" imagem="/imagens/ImagemPrincipal2.jpg" descricao="Resgatar, proteger e cuidar dos animais em situação de risco, promovendo a conscientização sobre a importância do respeito e da compaixão por todas as formas de vida." />
            </div>
            <div className="vermais"><Botao2 texto="Ver mais" /></div>
            <Footer />
        </div>
    );
}

export default Categorias;


