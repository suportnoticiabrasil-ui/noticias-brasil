import { Link, useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { news, trending } from "../data/mock.js";

export default function Home() {
  const navigate = useNavigate();

  const tecnologia = news.filter((n) => n.category === "Tecnologia");
  const economia = news.filter((n) => n.category === "Economia");
  const esportes = news.filter((n) => n.category === "Esportes");
  const saude = news.filter((n) => n.category === "Saúde");
  const entretenimento = news.filter((n) => n.category === "Entretenimento");

  const maisLidas = [...news]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-inner">
              <div>
                <h1>Notícias Brasil — Portal Digital Atualizado</h1>
                <p>Informação clara, rápida e organizada por categorias.</p>

                <div className="hero-cta">
                  <button className="btn" onClick={() => navigate("/pesquisa?q=")}>
                    Ver todas as notícias
                  </button>
                  <Link className="btn btn-ghost" to="/sobre">
                    Sobre o projeto
                  </Link>
                </div>
              </div>

              <div className="hero-image" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <AdSlot label="Topo — 728x90" height={90} />

      <section className="container">
        <div className="grid">
          {/* COLUNA PRINCIPAL */}
          <div>
            {/* ÚLTIMAS */}
            <div className="card">
              <div className="section-title">
                <h2>Últimas Notícias</h2>
                <Link
                  to="/pesquisa?q="
                  style={{ color: "var(--accent)", fontWeight: 800 }}
                >
                  Ver tudo →
                </Link>
              </div>

              <div className="section-body">
                <div className="news-grid">
                  {news.slice(0, 6).map((item) => (
                    <NewsCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <AdSlot label="Meio do Feed — 336x280" height={250} />

            {/* CATEGORIAS */}
            <CategoryBlock title="Tecnologia" items={tecnologia} />
            <CategoryBlock title="Economia" items={economia} />
            <CategoryBlock title="Esportes" items={esportes} />
            <CategoryBlock title="Saúde" items={saude} />
            <CategoryBlock title="Entretenimento" items={entretenimento} />
          </div>

          {/* SIDEBAR */}
          <aside className="card">
            {/* EM ALTA */}
            <div className="section-title">
              <h2 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <TrendingUp size={20} color="var(--accent)" /> Em alta
              </h2>
            </div>

            <div className="section-body">
              <div className="side-list">
                {trending.map((t, idx) => (
                  <button
                    key={t}
                    className="side-item"
                    onClick={() => navigate(`/pesquisa?q=${encodeURIComponent(t)}`)}
                    style={{
                      cursor: "pointer",
                      border: "1px solid rgba(229,231,235,.9)",
                      textAlign: "left",
                    }}
                  >
                    <div className="rank">{String(idx + 1).padStart(2, "0")}</div>
                    <div>
                      <div style={{ fontWeight: 900 }}>{t}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                        clique para pesquisar
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* MAIS LIDAS */}
              <div style={{ marginTop: 18 }}>
                <div className="section-title">
                  <h2 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    🔥 Mais lidas
                  </h2>
                </div>

                <div className="side-list">
                  {maisLidas.map((item, idx) => (
                    <button
                      key={item.slug}
                      className="side-item"
                      onClick={() => navigate(`/artigo/${item.slug}`)}
                      style={{
                        cursor: "pointer",
                        border: "1px solid rgba(229,231,235,.9)",
                        textAlign: "left",
                      }}
                    >
                      <div className="rank">{String(idx + 1).padStart(2, "0")}</div>
                      <div>
                        <div style={{ fontWeight: 900, lineHeight: 1.25 }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                          {item.category} •{" "}
                          {typeof item.views === "number"
                            ? item.views.toLocaleString("pt-BR")
                            : "0"}{" "}
                          views
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <AdSlot label="Sidebar — 300x600" height={320} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function CategoryBlock({ title, items }) {
  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div className="section-title">
        <h2>{title}</h2>
        <Link
          to={`/categoria/${title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")}`}
          style={{ color: "var(--accent)", fontWeight: 800 }}
        >
          Ver mais →
        </Link>
      </div>

      <div className="section-body">
        <div className="news-grid">
          {items.slice(0, 4).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}