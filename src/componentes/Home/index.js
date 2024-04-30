import React from 'react';
import BarraAcessibilidade from "../BarraAcessibilidade";
import Footer from "../Footer";
import ImagemPrincipal from "../ImagemPrincipal";
import NavBar from "../NavBar";
import Sobre from "../Sobre";

const images = [
    { src: '/imagens/ImagemPrincipal.png', alt: 'Ong Sorriso de Criança 1' },
    { src: '/imagens/ImagemPrincipal2.jpg', alt: 'Ong Casa dos Peludos' },
    { src: '/imagens/ImagemPrincipal3.png', alt: 'Ong Sorriso de Criança 3' }
];

function Home() {
    return (
        <div className="Home">
            <BarraAcessibilidade />
            <NavBar />
            <ImagemPrincipal images={images} />
            <Sobre />
            <Footer />
        </div>
    );
}

export default Home;