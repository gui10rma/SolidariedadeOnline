import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Depoimentos from "./componentes/Depoimentos";
import Login from "./componentes/Login";
import DadosEmpresa from "./componentes/DadosEmpresa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/depoimentos" element={<Depoimentos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/CadastroEmpresa" element={<DadosEmpresa/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
