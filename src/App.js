import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Depoimentos from "./componentes/Depoimentos";
import Login from "./componentes/Login";
import DadosEmpresa from "./componentes/DadosEmpresa";
import DadosDoadores from "./componentes/DadosDoadores";
import CartaoAdd from "./componentes/Cartaoadd";
import Categorias from "./componentes/Categoria";
import Doacao from "./componentes/Doacoes";
import Perfil from "./componentes/Perfil";
import Pagamentos from "./componentes/Pagamento";
import ConfirmacaoPagamento from "./componentes/PagamentoConfirmação";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/depoimentos" element={<Depoimentos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/CadastroEmpresa" element={<DadosEmpresa/>}/>
        <Route path="/DadosDoadores" element={<DadosDoadores/>}/>
        <Route path="/cartaoAdd" element={<CartaoAdd/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
        <Route path="/doacoes" element={<Doacao/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/pagamentos" element={<Pagamentos/>}/>
        <Route path="/confirmacao" element={<ConfirmacaoPagamento/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
