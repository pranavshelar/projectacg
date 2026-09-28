import SectionLabel from "./SectionLabel";

export default function BirthdayMemories() {
  const items = ["Another birthday.", "Another group photo.", "Another random day.", "Another memory."];

  return (
    <section className="section birthday-memories">
      <div className="section-inner">
        <SectionLabel>05 · birthday archive</SectionLabel>
        <h2>Birthday after <em>birthday...</em></h2>
        <p className="lead">Somehow, over the years, there always ended up being another memory.</p>

        <div className="ticket-row">
          {items.map((text, i) => (
            <button className="memory-ticket" key={text}>
              <span className="ticket-hole" />
              <small>MEMORY TICKET · 0{i + 1}</small>
              <strong>{text}</strong>
              <span>tap to keep</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
