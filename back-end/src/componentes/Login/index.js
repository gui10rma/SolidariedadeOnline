import Footer from "../Footer";
import BarraAcessibilidade from "../BarraAcessibilidade";
import NavBar from "../NavBar";
import Logar from "../Logar";


function Login() {
    return (
        <div className="login">
            <BarraAcessibilidade/>
            <NavBar/>
            <Logar/>
            <Footer />
        </div>
    );
}

export default Login;