import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <p className="parrafo-footer">
        Copyright © 2023. AquarneMC Reservados todos los derechos <br />
        <p>
          {" "}
          Soporte:
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJTNqmPhRBQMKvdrptcgDVNRtbqQwjTHJjFRHVqfkwljpdzpXcsxfJXlKwWwfpwmbsKQwjV"
            target="_blank"
            rel="noreferrer"
            className="contacto"
          >
            aquarnestaff@gmail.com
          </a>
        </p>
      </p>
      <a
        href="https://www.linkedin.com/in/kevin-balmaceda-a0350b199/"
        className="creada"
        target="_blank"
        rel="noreferrer"
      >
        Creador de la Web
      </a>
    </footer>
  );
}
