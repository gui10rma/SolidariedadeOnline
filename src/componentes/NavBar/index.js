import { Link } from 'react-router-dom'; // Importe o Link do React Router
import Botao from "../Botao"
import BotaoComImagem from "../BotaoComImagem"
import Logo from "../Logo"
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="NavBar">
            <Logo />
            <span className="SolidariedadeTexto">Solidariedade Online</span>
            <Link to="/" className="NavLink">
            <Botao texto="Home" />
            </Link>
            <Link to={"/depoimentos"}>
            <Botao texto="Depoimentos" />
            </Link>
            <Link to={"/categorias"}>
            <Botao texto="Categorias" />
            </Link>
            <Link to={"/doacoes"}>
            <Botao texto="Doações" />
            </Link>
            <Link to="/login" className="NavLink">
            <BotaoComImagem src="/imagens/Perfil.png" alt="Perfil" />
            </Link>
            </div>
        


    )
}
export default NavBar