import { Link, useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { news, trending } from "../data/mock.js";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-inner">
              <div>
                <h1>Notícias Brasil — rápido, claro e atualizado</h1>
                <p>
                  Notícias em tempo real com credibilidade, inovação e cobertura nacional.
                </p>
                <div className="hero-cta">
                  <button
                    className="btn"
                    onClick={() => navigate("/pesquisa?q=")}
                  >
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

      <AdSlot label="Topo (Leaderboard) — 728x90" height={90} />

      {/* CONTEÚDO */}
      <section className="container">
        <div className="grid">
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
              {/* PRIMEIRO BLOCO - 12 NOTÍCIAS */}
              <div className="news-grid">
                {news.slice(0, 12).map((item) => (
                  <NewsCard key={item.slug} item={item} />
                ))}
              </div>

              <AdSlot label="Meio do feed — Retângulo 336x280" height={250} />

              {/* SEGUNDO BLOCO - MAIS 12 */}
              <div className="news-grid" style={{ marginTop: 14 }}>
                {news.slice(12, 24).map((item) => (
                  <NewsCard key={item.slug + "-2"} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="card">
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
                    onClick={() =>
                      navigate(`/pesquisa?q=${encodeURIComponent(t)}`)
                    }
                    style={{
                      cursor: "pointer",
                      border: "1px solid rgba(229,231,235,.9)",
                    }}
                  >
                    <div className="rank">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>{t}</div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--muted)",
                          marginTop: 4,
                        }}
                      >
                        clique para pesquisar
                      </div>
                    </div>
                  </button>
                ))}
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