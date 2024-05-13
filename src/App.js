import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Depoimentos from "./componentes/Depoimentos";
import Login from "./componentes/Login";
import DadosEmpresa from "./componentes/DadosEmpresa";
import DadosDoadores from "./componentes/DadosDoadores";
import CartaoAdd from "./componentes/Cartaoadd";
import Categorias from "./componentes/Categoria";

function App() {
  const Categorias = [
    "Animais",
    "Meio Ambiente",
    "Criança e Adolescente",
    "LGBTQIA+",
    "Idosos",
    "Pessoas com Deficiência",
    "Justiça Social"

]
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
