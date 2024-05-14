import BarraAcessibilidade from "../BarraAcessibilidade";
import Botao2 from "../Botao2";
import Footer from "../Footer";
import NavBar from "../NavBar";
import PedidoCard from "../PedidoCard";
import "./doacoes.css";
function Doacoes() {
    return (
        <div className="doacao">
            <BarraAcessibilidade />
            <NavBar />
            <div className="pedidos">
                Doações
            </div>

            <PedidoCard ongName={"Sorriso de Criança"} ongLogo={"/imagens/ImagemPrincipal.png"} formaPagamento={"Boleto"} status={"Pendente"} backgroundColor={"#043809"} />
            <PedidoCard ongName={"Sorriso de Prata"} ongLogo={"/imagens/ImagemPrincipal3.png"} formaPagamento={"Cartão de Debito"} status={"Aprovado"} backgroundColor={"#6D5901"} />
            <PedidoCard ongName={"Casa dos Peludos"} ongLogo={"/imagens/ImagemPrincipal2.jpg"} formaPagamento={"Cartão de Credito"} status={"Recusado"} backgroundColor={"#043809"} />
            <div className="vermais">
                <Botao2 texto={"Ver mais"} />
            </div>
            <Footer />
        </div>
    );
}

export default Doacoes;