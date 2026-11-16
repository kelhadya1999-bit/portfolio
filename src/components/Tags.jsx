export default function Tags({ items }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="badge text-bg-secondary fw-normal">{t}</span>
      ))}
    </div>
  );
}
