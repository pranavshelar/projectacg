import SectionLabel from "./SectionLabel";

const randoms = [
  "Random selfie.",
  "Completely unnecessary photo.",
  "Why did we take this?",
  "Still keeping it.",
  "Nobody remembers what happened here.",
  "Okay, I remember.",
  "That escalated quickly.",
  "Normal day. Somehow memorable."
];

export default function RandomMemories() {
  return (
    <section className="section random-section">
      <div className="section-inner">
        <SectionLabel>06 · evidence of chaos</SectionLabel>
        <h2>Not every memory needs <em>an event.</em></h2>
        <div className="random-wall">
          {randoms.map((item, i) => (
            <div className={`random-note note-${i + 1}`} key={item}>
              <span>{item}</span>
              <small>{i % 3 === 0 ? "probably true" : "filed away"}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
