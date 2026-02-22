import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
import { news } from "../data/mock.js";

export default function Search() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return news;

    return news.filter((n) =>
      (n.title + " " + n.excerpt + " " + n.category)
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  return (
    <div className="container page">
      <div className="card">
        <h1>Pesquisa</h1>
        <p>
          Resultado para: <strong>{q || "(todas)"}</strong>
        </p>

        {results.length === 0 ? (
          <p style={{ marginTop: 14 }}>
            Nenhum resultado encontrado.
          </p>
        ) : (
          <div
            className="news-grid"
            style={{ marginTop: 14 }}
          >
            {results.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}