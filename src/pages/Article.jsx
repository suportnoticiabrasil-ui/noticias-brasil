import { Link, useParams } from "react-router-dom";
import { Clock, Eye } from "lucide-react";
import NewsCard from "../components/NewsCard.jsx";
import { news } from "../data/mock.js";

const fallbackImage =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80";

export default function Article() {
  const { slug } = useParams();

  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div className="container page">
        <div className="card">
          <h1>Artigo não encontrado</h1>
          <p>Esse conteúdo pode ter sido removido ou o link está incorreto.</p>
          <Link className="btn btn-ghost" to="/">
            Voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  const related = news
    .filter((n) => n.slug !== article.slug && n.category === article.category)
    .slice(0, 6);

  const more = news.filter((n) => n.slug !== article.slug).slice(0, 6);

  return (
    <div className="container page">
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {/* CAPA */}
        <div style={{ position: "relative" }}>
          <img
            src={article.image || fallbackImage}
            alt={article.title}
            style={{
              width: "100%",
              height: 360,
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.25) 65%, rgba(0,0,0,.05) 100%)",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div style={{ padding: 22, color: "white", maxWidth: 980 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span
                  style={{
                    background: "rgba(255,255,255,.16)",
                    border: "1px solid rgba(255,255,255,.22)",
                    padding: "6px 10px",
                    borderRadius: 999,
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  {article.category}
                </span>

                <span style={{ opacity: 0.9, fontSize: 12 }}>
                  Atualizado {article.date}
                </span>
              </div>

              <h1 style={{ marginTop: 10, marginBottom: 6, lineHeight: 1.15 }}>
                {article.title}
              </h1>

              {article.excerpt && (
                <p style={{ margin: 0, opacity: 0.95, fontSize: 16 }}>
                  {article.excerpt}
                </p>
              )}

              {/* Meta */}
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  opacity: 0.95,
                  fontSize: 13,
                }}
              >
                <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                  <Clock size={14} /> {article.date}
                </span>
                <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                  <Eye size={14} />{" "}
                  {typeof article.views === "number"
                    ? article.views.toLocaleString("pt-BR")
                    : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div style={{ padding: 22 }}>
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto",
              lineHeight: 1.85,
              fontSize: 16,
            }}
          >
            {Array.isArray(article.content) ? (
              article.content.map((p, idx) => (
                <p key={idx} style={{ margin: "0 0 14px" }}>
                  {p}
                </p>
              ))
            ) : (
              <p>{article.content}</p>
            )}

            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn btn-ghost" to="/">
                Voltar
              </Link>
              <Link className="btn" to={`/categoria/${article.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
                Ver mais de {article.category}
              </Link>
            </div>
          </div>

          {/* RELACIONADOS */}
          <div style={{ marginTop: 26 }}>
            <h2 style={{ marginBottom: 10 }}>Mais sobre {article.category}</h2>
            <div className="news-grid">
              {(related.length ? related : more).slice(0, 3).map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </div>

          {/* VOCÊ PODE GOSTAR */}
          <div style={{ marginTop: 18 }}>
            <h2 style={{ marginBottom: 10 }}>Você também pode gostar</h2>
            <div className="news-grid">
              {more.slice(0, 3).map((item) => (
                <NewsCard key={item.slug + "-more"} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}