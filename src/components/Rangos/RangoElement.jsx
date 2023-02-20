export default function RangoElement({ imagen, alt, description }) {
  return (
    <div className={`RangoElement`}>
      <img src={imagen} alt={alt} />
      <p>{description}</p>
      <button>Mas Info</button>
    </div>
  );
}
