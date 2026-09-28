import SectionLabel from "./SectionLabel";

const points = [
  ["School", 15, 24], ["Tuition", 31, 39], ["Birthdays", 52, 20],
  ["Random days", 69, 43], ["Friends", 80, 22], ["Imagicaa", 61, 67],
  ["Today", 37, 73], ["More to come", 83, 73]
];

export default function OceanConstellation() {
  return (
    <section className="constellation-section">
      <div className="night-gradient" />
      <div className="stars-bg" />
      <div className="constellation-inner section-inner">
        <SectionLabel>13 · the collection</SectionLabel>
        <h2>A lot of little <em>moments.</em></h2>
        <p>Somehow, they became a pretty good collection of memories.</p>

        <div className="constellation">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="15" y1="24" x2="31" y2="39" />
            <line x1="31" y1="39" x2="52" y2="20" />
            <line x1="52" y1="20" x2="80" y2="22" />
            <line x1="80" y1="22" x2="69" y2="43" />
            <line x1="69" y1="43" x2="61" y2="67" />
            <line x1="61" y1="67" x2="37" y2="73" />
            <line x1="37" y1="73" x2="83" y2="73" />
          </svg>
          {points.map(([label, x, y]) => (
            <span className="constellation-point" style={{ left: `${x}%`, top: `${y}%` }} key={label}>
              <i />{label}
            </span>
          ))}
        </div>

        <strong className="not-done">And we're not done yet.</strong>
      </div>
    </section>
  );
}
