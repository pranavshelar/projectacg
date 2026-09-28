import SectionLabel from "./SectionLabel";

export default function MemoryStats() {
  const stats = [
    ["Years of knowing you", "7", "and counting"],
    ["Memories worth keeping", "∞", "obviously"],
    ["Random conversations", "Too many", "probably"],
    ["More memories to make", "Definitely", "plans pending"]
  ];

  return (
    <section className="section stats-section">
      <div className="section-inner">
        <SectionLabel>03 · completely scientific</SectionLabel>
        <h2>A few <em>important numbers.</em></h2>
        <div className="stats-grid">
          {stats.map(([label, value, note]) => (
            <div className="stat-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
