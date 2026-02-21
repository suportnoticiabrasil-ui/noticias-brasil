import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const links = useMemo(
    () => [
      { to: "/", label: "Início" },
      { to: "/categoria/tecnologia", label: "Tecnologia" },
      { to: "/categoria/economia", label: "Economia" },
      { to: "/categoria/esportes", label: "Esportes" },
      { to: "/sobre", label: "Sobre" },
      { to: "/contato", label: "Contato" },
    ],
    []
  );

  function onSubmit(e) {
    e.preventDefault();
    navigate(`/pesquisa?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-badge" />
          <div className="brand-title">
            Notícias <span>Brasil</span>
          </div>
        </Link>

        <nav className="nav">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <form className="searchbar" onSubmit={onSubmit} role="search">
          <Search size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Pesquisar notícias..."
            aria-label="Pesquisar"
          />
          <button className="btn" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}