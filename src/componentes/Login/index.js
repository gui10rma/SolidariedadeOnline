import Footer from "../Footer";
import BarraAcessibilidade from "../BarraAcessibilidade";
import NavBar from "../NavBar";
import Logar from "../Logar";
import Form from "../Form";


function Login() {
    return (
        <div className="login">
            <BarraAcessibilidade/>
            <NavBar/>
            <Logar/>
            <Form placeholder="nome"/>
            <Footer />
        </div>
    );
}

export default Login;