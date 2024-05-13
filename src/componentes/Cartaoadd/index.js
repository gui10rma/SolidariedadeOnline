import BarraAcessibilidade from "../BarraAcessibilidade"
import Footer from "../Footer"
import NavBar from "../NavBar"
import CreditCardForm from "../Cartao"
import"./cartaoadd.css"

const CartaoAdd = () => {
    return (
        <div>
            <BarraAcessibilidade />
            <NavBar />
            <h10>Cartao de Credito</h10>
            <div className="Cartao1">
            <CreditCardForm/>
            </div>
            <Footer />
        </div>
    )
}
export default CartaoAdd