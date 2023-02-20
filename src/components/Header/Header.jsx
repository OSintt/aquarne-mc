import "./Header.css";
import logo from "../img/logoWeb.png";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className="header">
      <a href="index.html" className="logo">
        <img src={logo} alt="logo web server miencraft aquarneMC" title="logo aquarneMC" />
      </a>
      <Navbar />
    </div>
  );
}
