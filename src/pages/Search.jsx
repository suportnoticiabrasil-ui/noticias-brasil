import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
import { news } from "../data/mock.js";

function getHero(q) {
  // Se não tiver pesquisa
  if (!q) {
    return {
      title: "🔎 Pesquise notícias em segundos",
      subtitle:
        "Digite um tema e encontre rapidamente matérias de tecnologia, economia, esportes, saúde e entretenimento.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "A pesquisa do portal foi feita para ser simples e rápida. Você pode buscar por termos como “Pix”, “IA no Brasil”, “dólar”, “INSS”, “seleção”, “saúde” e muito mais.",
        "Quanto mais específico for o termo, melhor. Por exemplo: em vez de digitar apenas “economia”, tente “dólar em alta” ou “bolsa de valores hoje”.",
        "Se você não encontrar o que quer na primeira tentativa, experimente sinônimos, use menos palavras ou tente o nome do assunto principal.",
      ],
    };
  }

  // Regras por tema (pra não ficar tudo “Pix”)
  const topicRules = [
    {
      keys: ["pix", "transfer", "pagamento", "qr", "banco"],
      title: "💚 PIX: o que mudou e como isso te afeta",
      subtitle:
        "Entenda segurança, limites e boas práticas para usar o Pix com mais tranquilidade.",
      // imagem estilo fintech, sem bitcoin
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "O Pix virou o meio de pagamento mais usado por muita gente por ser rápido e prático. Por isso, é normal que o sistema receba ajustes de segurança e melhorias ao longo do tempo.",
        "Na prática, as mudanças mais comuns envolvem proteção contra golpes, confirmação de dados antes do envio e mecanismos para reduzir transações indevidas. O objetivo é você ter mais controle e evitar cair em fraudes.",
        "Dica importante: antes de confirmar um pagamento, confira o nome do recebedor e o valor. Se algo estiver estranho, pare e valide. Em compras, prefira usar QR Code ou copiar e colar diretamente do recebedor oficial.",
        "Se você usa Pix para trabalho (vendas, serviços), organize comprovantes e identifique pagamentos. Isso reduz confusão, facilita suporte e deixa seu controle financeiro mais forte.",
      ],
    },
    {
      keys: ["ia", "inteligência", "chatgpt", "tecnologia", "apps"],
      title: "🤖 IA no Brasil: o que está mudando no dia a dia",
      subtitle:
        "Da produtividade ao atendimento, a IA já impacta ferramentas e serviços usados diariamente.",
      image:
        "https://images.unsplash.com/photo-1526378722445-2f8f71f6f0ce?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "A inteligência artificial está cada vez mais presente em produtos e serviços: recomendações, atendimento automatizado, edição de imagem, ferramentas de escrita e análise de dados.",
        "O impacto mais visível é a velocidade. Processos que antes exigiam tempo agora ficam mais rápidos, mas também exigem atenção: confirmar informações, revisar textos e evitar clicar em links suspeitos.",
        "Para aproveitar melhor, use IA como apoio: rascunho, resumo, organização, comparação. O toque final (revisão e decisão) continua sendo seu.",
      ],
    },
    {
      keys: ["dólar", "dolar", "bolsa", "ações", "economia", "juros", "selic"],
      title: "📈 Economia: dólar, bolsa e o que observar",
      subtitle:
        "Entenda os sinais do mercado e os pontos que mais influenciam preços e decisões.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "Quando a conversa é dólar e bolsa, o que mais pesa costuma ser expectativa: juros, inflação, cenário externo e confiança no mercado.",
        "Para o dia a dia, o essencial é entender como isso afeta seu custo: produtos importados, viagens, eletrônicos e até alguns alimentos podem refletir mudanças cambiais.",
        "Se você acompanha notícias financeiras, foque em tendências e contexto, não só no número do dia. E mantenha seu planejamento: gasto, reserva e metas.",
      ],
    },
    {
      keys: ["inss", "calendário", "benefício", "aposentadoria"],
      title: "🗓️ INSS: calendário e organização",
      subtitle:
        "Veja como se organizar com datas, avisos e documentos para evitar dor de cabeça.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "Quando o assunto é INSS, o melhor caminho é organização: anote datas importantes, guarde comprovantes e acompanhe comunicados oficiais.",
        "Se você está buscando calendário de pagamentos, tente usar o termo com o mês/ano e seu tipo de benefício. Isso costuma retornar resultados mais relevantes.",
        "Se aparecer dúvida, procure por orientações claras e evite links estranhos. Golpes usando temas de benefício e “atualização cadastral” são comuns.",
      ],
    },
    {
      keys: ["seleção", "amistoso", "jogo", "esportes", "futebol"],
      title: "⚽ Esportes: agenda e o que assistir",
      subtitle:
        "Encontre jogos, horários e o que está em alta no fim de semana.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80",
      longText: [
        "Para achar rápido o que assistir, busque por time + competição, ou “agenda do fim de semana”.",
        "Se você quer só um resumo, procure por “guia rápido” ou “o que assistir” + esporte. Isso filtra bem.",
        "E se o resultado estiver muito amplo, tente: “seleção amistoso”, “campeonato” ou até o nome do estádio/cidade.",
      ],
    },
  ];

  const match =
    topicRules.find((r) => r.keys.some((k) => q.includes(k))) || null;

  if (match) return match;

  // tema genérico para qualquer busca
  return {
    title: `🔎 Resultados e contexto para: ${q}`,
    subtitle:
      "Veja abaixo as notícias encontradas. Se quiser, refine a busca com mais detalhes.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    longText: [
      "Nem sempre a primeira pesquisa traz exatamente o que você quer. Tente encurtar o termo (ex: “pix”) ou detalhar (ex: “pix novas regras”).",
      "Você também pode pesquisar por categoria: “Tecnologia”, “Economia”, “Esportes”, “Saúde” e “Entretenimento”.",
      "Se não encontrar, confira as sugestões logo abaixo — pode ter um assunto próximo do que você está procurando.",
    ],
  };
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return news;

    return news.filter((n) =>
      (n.title + " " + n.excerpt + " " + n.category).toLowerCase().includes(q)
    );
  }, [q]);

  const hero = useMemo(() => getHero(q), [q]);

  // Sugestões para não ficar vazio:
  const suggestions = useMemo(() => {
    // pega alguns diferentes do resultado (quando tiver resultado)
    const base = news.filter((n) => !results.includes(n));
    return (base.length ? base : news).slice(0, 6);
  }, [results]);

  return (
    <div className="container page">
      <div className="card">
        <h1>Pesquisa</h1>
        <p>
          Resultado para: <strong>{q || "(todas)"}</strong>
        </p>

        {/* HERO (imagem + texto grande) */}
        <div className="mt-6 relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-[320px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30 flex items-center">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold">{hero.title}</h2>
              <p className="mt-2 text-lg" style={{ maxWidth: 720 }}>
                {hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* TEXTO GRANDE (contexto) */}
        <div style={{ marginTop: 18, lineHeight: 1.8 }}>
          {hero.longText.map((t, idx) => (
            <p key={idx} style={{ marginTop: idx === 0 ? 0 : 10 }}>
              {t}
            </p>
          ))}
        </div>

        {/* RESULTADOS */}
        {results.length === 0 ? (
          <>
            <p style={{ marginTop: 18 }}>
              Nenhum resultado encontrado para <strong>{q}</strong>.
            </p>

            <h3 style={{ marginTop: 18 }}>Sugestões para você</h3>
            <div className="news-grid" style={{ marginTop: 14 }}>
              {suggestions.slice(0, 3).map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>

            <h3 style={{ marginTop: 18 }}>Em alta</h3>
            <div className="news-grid" style={{ marginTop: 14 }}>
              {news.slice(0, 3).map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="news-grid" style={{ marginTop: 18 }}>
              {results.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>

            <h3 style={{ marginTop: 22 }}>Você também pode gostar</h3>
            <div className="news-grid" style={{ marginTop: 14 }}>
              {suggestions.slice(0, 3).map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}