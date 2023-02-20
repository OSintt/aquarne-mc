import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="lista">
        <Link to="/">Inicio</Link>
        <Link to="/Rangos">Rangos</Link>
        <div className="separador"></div>
        <Link to="/Donaciones">Donaciones</Link>
        <Link to="/MiniJuegos">MiniJuegos</Link>
      </ul>
    </div>
  );
}
