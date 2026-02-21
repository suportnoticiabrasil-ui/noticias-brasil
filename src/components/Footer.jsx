import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 style={{ marginBottom: 8 }}>Notícias Brasil</h3>
          <p>Portal de notícias com layout leve, responsivo e pronto para AdSense.</p>
          <p style={{ marginTop: 10, fontSize: 12, color: "#6b7280" }}>
            © {year} Notícias Brasil. Todos os direitos reservados.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: 8 }}>Institucional</h3>
          <div style={{ display: "grid", gap: 8 }}>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos</Link>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: 8 }}>Categorias</h3>
          <div style={{ display: "grid", gap: 8 }}>
            <Link to="/categoria/tecnologia">Tecnologia</Link>
            <Link to="/categoria/economia">Economia</Link>
            <Link to="/categoria/esportes">Esportes</Link>
            <Link to="/categoria/saude">Saúde</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}