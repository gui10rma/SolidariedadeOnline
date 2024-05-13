import BarraAcessibilidade from "../BarraAcessibilidade";
import NavBar from "../NavBar";
import Footer from "../Footer";
import DropdownFormList from "../DropCategorias";
function Categorias() {
    return (
        <div className="Categorias">
            <BarraAcessibilidade />
            <DropdownFormList/>
            <NavBar />
            <Footer />
        </div>
    );
}

export default Categorias