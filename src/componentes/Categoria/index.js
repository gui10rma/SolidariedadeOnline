// Categorias.js
import React, { useEffect, useState } from "react";
import BarraAcessibilidade from "../BarraAcessibilidade";
import Card from "../Card";
import DropdownCategoria from "../DropCategorias";
import Footer from "../Footer";
import NavBar from "../NavBar";

function Categorias() {
    const [cards, setCards] = useState([]);

    const Categorias = [
        "Animais",
        "Meio Ambiente",
        "Criança e Adolescente",
        "LGBTQIA+",
        "Idosos",
        "Pessoas com Deficiência",
        "Justiça Social"
    ];

    const [ongs, setOngs] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    useEffect(() => {
        if (categoriaSelecionada) {
            const novaONG = ongs.find(ong => ong.categoria === categoriaSelecionada);
            if (novaONG) {
                setCards(prevCards => [...prevCards, novaONG]);
            }
        }
    }, [categoriaSelecionada]);

    const handleCategoriaChange = (categoria) => {
        console.log("Categoria selecionada:", categoria);
        setCategoriaSelecionada(categoria);
    };

    const ongsFiltradas = categoriaSelecionada
        ? ongs.filter(ong => ong.categoria === categoriaSelecionada)
        : ongs;

    return (
        <div className="Categorias">
            <BarraAcessibilidade />
            <NavBar />
            <DropdownCategoria itens={Categorias} onCategoriaChange={handleCategoriaChange} />
            <div className="CardsContainer">
                {cards.map(ong => <Card key={ong.id} ong={ong} />)}
            </div>
            <Footer />
        </div>
    );
}

export default Categorias;


