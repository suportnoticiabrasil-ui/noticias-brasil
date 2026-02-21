import { Link } from "react-router-dom";
import { Clock, Eye } from "lucide-react";

export default function NewsCard({ item }) {
  return (
    <article className="news">
      <Link to={`/artigo/${item.slug}`}>
        <img src={item.image} alt={item.title} loading="lazy" />
      </Link>
      <div className="pad">
        <span className={`pill ${item.category === "Economia" ? "orange" : ""}`}>{item.category}</span>
        <h3>
          <Link to={`/artigo/${item.slug}`}>{item.title}</Link>
        </h3>
        <p style={{ margin: "8px 0 0" }}>{item.excerpt}</p>
        <div className="meta">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Clock size={14} /> {item.date}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Eye size={14} /> {item.views.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </article>
  );
}