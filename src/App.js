import Swal from "sweetalert2";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import Rangos from "./components/Rangos/Rangos";
import Donaciones from "./components/Donaciones/Donaciones";
import MiniJuegos from "./components/Minijuegos/MiniJuegos";
import Footer from "./components/Footer/Footer";

function App() {
  const copiarAlPortapapeles = () => {
    const inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", "Proximamente");
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    Swal.fire("IP Copiada con Exito!");
  };

  return (
    <div className="container">
      <button id="enlace" type="button" className="www.com.ar" onClick={copiarAlPortapapeles}>
        IP: Proximamente
      </button>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rangos" element={<Rangos />} />
        <Route path="/Donaciones" element={<Donaciones />} />
        <Route path="/MiniJuegos" element={<MiniJuegos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
