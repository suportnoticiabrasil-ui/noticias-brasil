import { Link, useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { news, trending } from "../data/mock.js";

export default function Home() {
  const navigate = useNavigate();

  const tecnologia = news.filter(n => n.category === "Tecnologia");
  const economia = news.filter(n => n.category === "Economia");
  const esportes = news.filter(n => n.category === "Esportes");
  const saude = news.filter(n => n.category === "Saúde");
  const entretenimento = news.filter(n => n.category === "Entretenimento");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-inner">
              <div>
                <h1>Notícias Brasil — Portal Digital Atualizado</h1>
                <p>
                  Informação clara, rápida e organizada por categorias.
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

      <AdSlot label="Topo — 728x90" height={90} />

      <section className="container">

        {/* ÚLTIMAS */}
        <div className="card">
          <div className="section-title">
            <h2>Últimas Notícias</h2>
          </div>
          <div className="section-body">
            <div className="news-grid">
              {news.slice(0, 6).map(item => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>

        <AdSlot label="Meio do Feed — 336x280" height={250} />

        {/* TECNOLOGIA */}
        <CategoryBlock title="Tecnologia" items={tecnologia} />

        {/* ECONOMIA */}
        <CategoryBlock title="Economia" items={economia} />

        {/* ESPORTES */}
        <CategoryBlock title="Esportes" items={esportes} />

        {/* SAÚDE */}
        <CategoryBlock title="Saúde" items={saude} />

        {/* ENTRETENIMENTO */}
        <CategoryBlock title="Entretenimento" items={entretenimento} />

      </section>
    </>
  );
}

function CategoryBlock({ title, items }) {
  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <div className="section-body">
        <div className="news-grid">
          {items.slice(0, 4).map(item => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}