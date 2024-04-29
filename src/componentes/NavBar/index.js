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
            <Botao texto="Home" />
            <Botao texto="Depoimentos" />
            <Botao texto="Categorias" />
            <Botao texto="Doações" />
            <BotaoComImagem src="/imagens/Perfil.png" alt="Perfil" />
            </div>
        


    )
}
export default NavBar