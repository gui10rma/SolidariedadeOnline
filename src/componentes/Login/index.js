import BarraAcessibilidade from "../BarraAcessibilidade";
import Botao2 from "../Botao2";
import BotaoComImagem3 from "../BotaoComImagem3";
import Footer from "../Footer";
import Logar from "../Logar";
import NavBar from "../NavBar";
import "./login.css"
import Botao from "../Botao";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <BarraAcessibilidade />
            <NavBar />
            <div className="divisao">
                <div className="divisao2">
                    <h8 className="cadastrartitulo">Seja um doador - Cadastre-se</h8>
                    <p className="cadatrartexto">Cadastrar-se na Solidariedade Online oferece benefícios como facilidade de doação, acompanhamento do histórico de contribuições, recebimento de informações sobre novas campanhas, integração em uma comunidade solidária e garantia de segurança e transparência nos dados fornecidos.</p>
                    <Botao2 texto="Aqui" />
                    <h9 className="cadastrartitulo">Ongs - Cadastre-se </h9>
                    <p className="cadatrartexto">Não perca tempo, junte-se a nós nessa jornada de solidariedade e impacto positivo! Clique aqui para se cadastrar agora mesmo.</p>
                    <Link to={"/CadastroEmpresa"}>
                    <Botao2 texto="Aqui" />
                    </Link>
                </div>
                <div className="divisao1">
                    <h10 className="LoginTitulo">Login</h10>
                    <BotaoComImagem3 src="/imagens/google.png" alt="Logar com o google" />
                    <Botao texto="Esqueceu a senha"/>
                    <div className="logar">
                    <Logar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;