import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contato
          </h1>
          <p className="mt-3 text-gray-600">
            Fale com a equipe do <strong>Notícias Brasil</strong>.
          </p>
        </header>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-5">
          <div>
            <h2 className="text-xl font-semibold">E-mail</h2>
            <p className="mt-2 text-gray-700">
              Para dúvidas, parcerias, correções, reportar erros e assuntos gerais:
            </p>
            <p className="mt-3">
              <a
                className="font-medium text-orange-600 hover:text-orange-700 underline"
                href="mailto:suportnoticiabrasil@gmail.com"
              >
                suportnoticiabrasil@gmail.com
              </a>
            </p>
          </div>

          <div className="border-t pt-5">
            <h2 className="text-xl font-semibold">Atendimento</h2>
            <p className="mt-2 text-gray-700">
              Respondemos em horário comercial (Brasil), normalmente em até 2 dias úteis.
            </p>
          </div>

          <div className="border-t pt-5">
            <h2 className="text-xl font-semibold">Direitos autorais & créditos</h2>
            <p className="mt-2 text-gray-700">
              Se você é detentor de direitos e deseja solicitar correção, atribuição,
              atualização ou remoção de conteúdo, envie o link da página e detalhes do pedido.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}