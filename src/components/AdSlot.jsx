export default function AdSlot({ label = "Espaço de noticia", height = 90 }) {
  return (
    <div className="container">
      <div className="ad" style={{ minHeight: height }}>
        <strong>{label}</strong>
        <small>Noticias em todos os territorios nacional.</small>
      </div>
    </div>
  );
}