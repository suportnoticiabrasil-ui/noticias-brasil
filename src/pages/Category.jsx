import { Link, useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
import AdSlot from "../components/AdSlot.jsx";
import { news } from "../data/mock.js";

export default function Category() {
  const { slug } = useParams();
  const title = slug?.charAt(0).toUpperCase() + slug?.slice(1);
  const items = news.filter((n) => n.category.toLowerCase() === slug);

  return (
    <div className="container page">
      <div className="card">
        <h1>Categoria: {title}</h1>
        <p>Conteúdo organizado para facilitar leitura e navegação.</p>

        <AdSlot label="Topo da categoria — 728x90" height={90} />

        {items.length === 0 ? (
          <p>Nenhum artigo nessa categoria ainda.</p>
        ) : (
          <div className="news-grid" style={{ marginTop: 14 }}>
            {items.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <Link className="btn btn-ghost" to="/">Voltar</Link>
        </div>
      </div>
    </div>
  );
}