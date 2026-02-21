export default function AdSlot({ label = "Espaço de anúncio (AdSense)", height = 90 }) {
  return (
    <div className="container">
      <div className="ad" style={{ minHeight: height }}>
        <strong>{label}</strong>
        <small>Depois de aprovado, você cola aqui o código do Google AdSense.</small>
      </div>
    </div>
  );
}