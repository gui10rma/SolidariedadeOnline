import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarraAcessibilidade from '../BarraAcessibilidade';
import Botao2 from '../Botao2';
import Card from '../Card';
import CartaoPronto from '../CartaoPronto';
import DropdownCategoria from '../DropCategorias';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SeletorDeValor from '../SeletorDeValor';
import "./pagamento.css";
function Pagamentos() {
    const Categorias = [
        "Cartão de Credito",
        "Cartaõ de Debito",
        "Boleto"
    ];

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);


    const handleCategoriaChange = (categoria) => {
        console.log("Categoria selecionada:", categoria);
        setCategoriaSelecionada(categoria);
    };
    return (
        <div className="Pagamento">
            <BarraAcessibilidade />
            <NavBar />
            <div className="PagamentoContainer">
                <div className="Categoria1">
                    <DropdownCategoria itens={Categorias} onCategoriaChange={handleCategoriaChange} />
                    <CartaoPronto />
                </div>
                <div className="Categoria2">
                    <SeletorDeValor />
                    </div>
                    <div className='Categoria3'>
                        <Card Razãosocial="Sorisso de criança" imagem="/imagens/ImagemPrincipal.png" descricao="Garantir que todas as crianças tenham acesso a direitos básicos, como educação de qualidade, alimentação adequada, cuidados médicos e proteção contra qualquer forma de violência." />
                    </div>
                
            </div>
            <div className="PagamentoContainer">
            <Link to={"/confirmacao"}>
            <Botao2 texto="Pagar" />
            </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Pagamentos;