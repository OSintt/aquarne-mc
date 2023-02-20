import RangoOro from "./Rango-img/Rango-oro.png";
import RangoDiamante from "./Rango-img/Rango-diamante.png";
import RangoRedstone from "./Rango-img/Rango-redstone.png";
import RangoEsmeralda from "./Rango-img/Rango-esmeralda.png";
import RangoElement from "./RangoElement";
import "./Rangos.css";

export default function Rangos() {
  return (
    <section className="rangos">
      <h1>Rangos</h1>
      <hr className="linea-separadora" />
      <div className="rangos-list">
        <div className="elemento-rango">
          <div className="background oro"></div>
          <RangoElement imagen={RangoOro} alt="Rango Oro de AquarneMC server minecraft" description="Rango Oro" />
        </div>
        <div className="elemento-rango">
          <div className="background diamante"></div>
          <RangoElement
            imagen={RangoDiamante}
            alt="Rango Diamante de AquarneMC server minecraft"
            description="Rango Diamante"
          />{" "}
        </div>
        <div className="elemento-rango">
          <div className="background esmeralda"></div>
          <RangoElement
            imagen={RangoEsmeralda}
            alt="Rango esmeralda de AquarneMC server minecraft"
            description="Rango esmeralda"
          />
        </div>
        <div className="elemento-rango">
          <div className="background redstone"></div>
          <RangoElement
            imagen={RangoRedstone}
            alt="Rango redstone de AquarneMC server minecraft"
            description="Rango redstone"
          />
        </div>{" "}
      </div>
      <hr className="linea-separadora" />
    </section>
  );
}
