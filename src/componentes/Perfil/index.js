import { Link } from "react-router-dom";
import BarraAcessibilidade from "../BarraAcessibilidade";
import Botao2 from "../Botao2";
import Botao3 from "../Botao3";
import Footer from "../Footer";
import NavBar from "../NavBar";
import PerfilCard from "../PerfilCard";
import "./perfil.css";
function Perfil() {
    return (
    <div className="Per1">
        <BarraAcessibilidade />
        <NavBar />
        <div className="Perfil">
            <div className="div1">
                <img src="/imagens/Solidario.png" alt="Imagem Solidario" className="imgLogo" />
                <div>Dados Pessoais</div>
                <Link to={"/dadosdoadores"}>
                <Botao2 texto="Editar Perfil" />
                </Link>
                <Link to={"/Login"}>
                <Botao3 texto="Sair" background="red" hoverBackground="darkred" />
                </Link>
                <Link to={"/cartaoAdd"}>
                <Botao3 texto="Add Cartão" background="green" hoverBackground="darkgreen" />
                </Link>
            </div>
            <div className="div2">
                <PerfilCard nome="Guilherme" cidade="São Paulo" telefone="11 99999-9999" email="ZwP3A@example.com" />
            </div>

        </div>
        <Footer />
    </div>
    
    );
}

export default Perfil;