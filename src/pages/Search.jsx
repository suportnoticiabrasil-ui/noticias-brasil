import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../components/NewsCard.jsx";
import AdSlot from "../components/AdSlot.jsx";
import { news } from "../data/mock.js";

export default function Search() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return news;
    return news.filter((n) =>
      (n.title + " " + n.excerpt + " " + n.category).toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <div className="container page">
      <div className="card">
        <h1>Pesquisa</h1>
        <p>Resultado para: <strong>{q || "(todas)"}</strong></p>
        <div className="mt-6 relative overflow-hidden rounded-2xl shadow-xl">
  <img
    src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1400&q=80"
    alt="Pagamento com Pix no celular"
    className="w-full h-[350px] object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-500/50 flex items-center">
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold">
        🚨 Novas Regras do PIX 2025
      </h2>
      <p className="mt-2 text-lg">
        Veja o que mudou e como isso impacta seus pagamentos.
      </p>
    </div>
  </div>
</div>
        {results.length === 0 ? (
          <p>🧾 Novas Regras do PIX – Tudo o que Você Precisa Saber

O PIX é, desde seu lançamento pelo Banco Central do Brasil em 2020, uma das formas de pagamento e transferência mais rápidas e populares do país. A cada ano ele é aperfeiçoado com novas funcionalidades, maior segurança e regras atualizadas para proteger tanto consumidores quanto empresas.

Em 2025, o Banco Central implementou um conjunto de novas regras e mudanças para o PIX, com foco em segurança, transparência, responsabilidade e eficiência nas transações financeiras digitais. Essas mudanças impactam usuários comuns, empreendedores, instituições financeiras e empresas de tecnologia que operam com PIX.

A seguir, explicamos em detalhes o que muda e como isso pode afetar você:

 1. Mais segurança nas transações

Uma das principais preocupações do BC é reduzir fraudes e golpes envolvendo PIX. As novas regras incluem:

✔ Confirmação do nome do beneficiário antes da confirmação da transferência — ou seja, o usuário verá o nome da pessoa ou empresa e precisa confirmar que está correto antes de finalizar o pagamento;

✔ Validação por biometria ou senha reforçada em valores altos, para evitar transferências indevidas por acesso não autorizado;

✔ Alertas automáticos para transações suspeitas — o sistema pode bloquear temporariamente um PIX identificado como fora do padrão do usuário até confirmação.

Essas medidas fortalecem a proteção de quem usa o PIX diariamente e diminuem riscos de golpes comuns.

 2. PIX para empresas e marketplaces

Antes, o PIX era usado principalmente para transferências entre pessoas físicas e pagamentos simples. Na atualização de 2025:

 Empresas podem integrar PIX com contas garantidas, permitindo que o valor fique reservado até a confirmação do serviço ou produto entregue — útil para e-commerce, marketplaces e serviços por demanda;

 PIX parcelado e com prazo: agora empresas podem oferecer parcelamentos via PIX, com definição de juros ou prazos autorizados pelo Banco Central;

 Mais transparência nas cobranças: todas as transações PIX entre empresas terão campos obrigatórios de identificação de produto/serviço, evitando disputas de pagamento ou devoluções indevidas.

3. Limites e autorizações

O Banco Central manteve o PIX gratuito para pessoas físicas, mas reforçou regras sobre limites:

🔹 Limite padrão diário para pessoas físicas: agora cada banco ou fintech pode estabelecer o seu próprio limite de acordo com o perfil, sem ultrapassar o teto permitido pelo BC;

🔹 Solicitação de autorização extra para valores elevados: além de senha, pode ser necessária confirmação via app para garantir que conta não foi acessada indevidamente;

🔹 Controle por instituição financeira: cada banco ou carteira digital poderá definir limites personalizados com base no histórico do cliente, sem ultrapassar o que o Banco Central permite.

Essas medidas visam equilibrar flexibilidade e segurança para evitar transferências acidentais ou mal intencionadas.

📱 4. PIX com QR Dinâmico + QR Inteligente

O PIX continua expandindo funções para facilitar compras no varejo, restaurantes, e-commerce e transações presenciais.

🔸 QR Dinâmico atualizado — agora com dados adicionais como ID da loja, código do produto, itens e valor total, tudo em um só QR Code;

🔸 QR Inteligente com reconciliação automática — funge como um comprovante que já “fecha” com o valor certo para cada operação, evitando erros de digitação;

🔸 Leitura automática de PIX com NFC — graças ao NFC, o usuário pode aproximar o telefone e pagar sem precisar abrir o app ou escanear QR.

Essas evoluções tornam o PIX mais competitivo frente a cartões, carteiras digitais e boletos.

5. Transparência para o usuário

Outra mudança importante é a obrigação de instituições financeiras fornecerem relatórios de uso do PIX com:

📄 Histórico detalhado
📄 Tempo da transação
📄 Dados de comerciante/recebedor
📄 Categorias de gastos automáticas

Isso permite melhor controle financeiro para pessoas físicas e empresas, facilitando a gestão de despesas, declaração de impostos ou contabilidade.

🔄 6. Devoluções e chargeback

O PIX agora possui regras mais claras sobre devoluções:

🔹 Direito de estorno em casos de fraude comprovada — o banco terá prazo para devolver o valor depois do reconhecimento;

🔹 Política de chargeback entre empresas — em disputas comerciais, bancos poderão intermediar e decidir com base em evidências;

🔹 Notificações obrigatórias ao usuário — sempre que houver devolução ou contestação, o cliente será informado.

Isso traz mais confiança ao usar PIX em compras, serviços e pagamentos eletrônicos.

 7. Compromisso com inovação

O PIX segue em constante evolução. O Banco Central tem incentivado o uso de novas tecnologias como:

👉 APIs abertas para integração com sistemas próprios
👉 Integração com inteligência artificial para prevenção de fraudes
👉 Experiências de pagamento com voz ou IoT (internet das coisas)

Essa abertura de inovação garante que o PIX permaneça relevante e seguro frente às inovações globais de pagamento..</p>
        ) : (
          <div className="news-grid" style={{ marginTop: 14 }}>
            {results.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}