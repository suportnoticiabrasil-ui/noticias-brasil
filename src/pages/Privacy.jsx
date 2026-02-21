import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  const updatedAt = "20/02/2026";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-gray-600">Última atualização: {updatedAt}</p>
        </header>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Esta Política descreve como o <strong>Notícias Brasil</strong> trata informações
            de visitantes. Ao usar o site, você concorda com estas práticas.
          </p>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">1) Dados coletados</h2>
            <p className="mt-2">
              Podemos coletar informações básicas de navegação (como páginas visitadas, tempo
              de permanência, tipo de dispositivo e endereço IP) para melhorar desempenho e
              conteúdo. Se você nos contatar por e-mail, receberemos as informações enviadas
              na mensagem.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">2) Cookies</h2>
            <p className="mt-2">
              Cookies podem ser usados para lembrar preferências e medir audiência. Você pode
              desativar cookies nas configurações do seu navegador, mas isso pode impactar
              algumas funcionalidades.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">3) Publicidade (Google AdSense)</h2>
            <p className="mt-2">
              Após aprovação e ativação de anúncios, o Google e seus parceiros podem usar cookies
              e/ou identificadores para exibir anúncios com base em visitas a este e/ou outros sites.
              Você pode gerenciar preferências de anúncios nas configurações do Google.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">4) Compartilhamento de dados</h2>
            <p className="mt-2">
              Não vendemos seus dados. Podemos compartilhar informações de forma agregada (sem
              identificar pessoas) para análises. Serviços de terceiros (como métricas e anúncios)
              podem tratar dados conforme suas próprias políticas.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">5) Segurança</h2>
            <p className="mt-2">
              Aplicamos medidas razoáveis para proteger informações, mas nenhum sistema é 100% seguro.
              Recomendamos que você não envie dados sensíveis por e-mail.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">6) Contato</h2>
            <p className="mt-2">
              Para dúvidas sobre esta Política, fale com a gente:{" "}
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