import { Link } from "react-router-dom";
import { Clock, Eye } from "lucide-react";

export default function NewsCard({ item }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80";

  return (
    <article className="news">
      <Link to={`/artigo/${item.slug}`}>
        <img
          src={item.image || fallbackImage}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
      </Link>

      <div className="pad">
        <span
          className={`pill ${
            item.category === "Economia"
              ? "orange"
              : item.category === "Entretenimento"
              ? "purple"
              : ""
          }`}
        >
          {item.category}
        </span>

        <h3>
          <Link to={`/artigo/${item.slug}`}>{item.title}</Link>
        </h3>

        <p style={{ margin: "8px 0 0" }}>{item.excerpt}</p>

        <div className="meta">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Clock size={14} /> {item.date}
          </span>

          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Eye size={14} />{" "}
            {typeof item.views === "number"
              ? item.views.toLocaleString("pt-BR")
              : "0"}
          </span>
        </div>
      </div>
    </article>
  );
}