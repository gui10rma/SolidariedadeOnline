import NavBar from "../NavBar";
import Sobre from "../Sobre";
import Footer from "../Footer";
import BarraAcessibilidade from "../BarraAcessibilidade";
import Imagemprincipal from "../ImagemPrincipal";

function Home() {
    return (
        <div className="Home">
            <BarraAcessibilidade/>
            <NavBar />
            <Imagemprincipal/>
            <Sobre />
            <Footer />
        </div>
    );
}

export default Home;