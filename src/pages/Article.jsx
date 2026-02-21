import { useParams, Link } from "react-router-dom";
import { news } from "../data/mock.js";
import AdSlot from "../components/AdSlot.jsx";

export default function Article() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="rounded-2xl border bg-white p-6">
        <h1 className="text-xl font-extrabold">Artigo não encontrado</h1>
        <Link to="/" className="text-slate-700 underline">Voltar</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="text-sm text-slate-500">
        <Link to={`/categoria/${item.category.toLowerCase()}`} className="underline">
          {item.category}
        </Link>{" "}
        • {item.date}
      </div>

      <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">{item.title}</h1>
      <p className="mt-3 text-lg text-slate-600">{item.excerpt}</p>

      <div className="mt-6 overflow-hidden rounded-3xl border bg-slate-200">
        <img src={item.image} alt={item.title} className="w-full object-cover" />
      </div>

      <AdSlot />

      <div className="prose prose-slate max-w-none mt-6">
        {item.content.map((p, i) => (
          <p key={i} className="text-slate-700 leading-8">{p}</p>
        ))}
      </div>

      <AdSlot />
    </article>
  );
}