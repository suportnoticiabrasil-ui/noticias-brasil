import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sobre o Notícias Brasil
          </h1>
          <p className="mt-3 text-gray-600">
            Um portal independente com foco em conteúdo claro, rápido e responsivo.
          </p>
        </header>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">O que fazemos</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              O <strong>Notícias Brasil</strong> reúne e organiza informações sobre temas
              relevantes do dia a dia (tecnologia, economia, esportes e outros). Nosso objetivo
              é oferecer leitura agradável, estrutura limpa e navegação simples.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold">Compromisso com qualidade</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Priorizamos clareza e boa experiência no celular.</li>
              <li>• Buscamos corrigir rapidamente eventuais erros.</li>
              <li>• Evitamos sensacionalismo e títulos enganosos.</li>
            </ul>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold">Publicidade</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              O site pode exibir anúncios para manter a operação e a produção de conteúdo.
              Quando houver publicidade, ela será identificada e posicionada para não atrapalhar
              a leitura.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold">Contato</h2>
            <p className="mt-2 text-gray-700">
              Dúvidas, sugestões e parcerias:{" "}
              <a
                className="text-orange-600 hover:text-orange-700 underline font-medium"
                href="mailto:suportnoticiabrasil@gmail.com"
              >
                suportnoticiabrasil@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}