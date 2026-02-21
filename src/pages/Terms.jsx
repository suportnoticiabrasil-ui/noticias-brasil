import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  const updatedAt = "20/02/2026";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Termos de Uso
          </h1>
          <p className="mt-3 text-gray-600">Última atualização: {updatedAt}</p>
        </header>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Ao acessar o <strong>Notícias Brasil</strong>, você concorda com estes Termos.
            Se não concordar, não utilize o site.
          </p>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">1) Uso do conteúdo</h2>
            <p className="mt-2">
              O conteúdo do site é fornecido para fins informativos. Você pode compartilhar links
              e citar trechos curtos com atribuição. É proibido copiar, reproduzir ou republicar
              integralmente sem autorização.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">2) Responsabilidade</h2>
            <p className="mt-2">
              Nos esforçamos para manter informações corretas e atualizadas, mas não garantimos
              ausência de erros. O uso das informações é de responsabilidade do visitante.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">3) Comentários e contato</h2>
            <p className="mt-2">
              Caso exista espaço para interação, é proibido publicar conteúdo ilegal, ofensivo,
              discriminatório, spam ou que viole direitos de terceiros.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">4) Publicidade</h2>
            <p className="mt-2">
              O site pode exibir anúncios. Não nos responsabilizamos por produtos/serviços de terceiros
              anunciados, nem por políticas externas.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">5) Alterações</h2>
            <p className="mt-2">
              Podemos atualizar estes Termos e a Política de Privacidade a qualquer momento.
              A data de atualização será informada nesta página.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">6) Contato</h2>
            <p className="mt-2">
              Dúvidas:{" "}
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