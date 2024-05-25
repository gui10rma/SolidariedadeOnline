import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Depoimentos from "./componentes/Depoimentos";
import Login from "./componentes/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/depoimentos" element={<Depoimentos/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
