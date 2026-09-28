import { useState } from "react";
import SectionLabel from "./SectionLabel";

const cards = [
  ["The random conversations.", "Half of them made no sense. I still remember more of them than I should."],
  ["The stupid jokes.", "Some were actually funny. Most definitely weren't."],
  ["The days that felt ordinary.", "Funny how some completely normal days become the ones you remember."],
  ["The moments that somehow stayed.", "Not every memory needs a big event attached to it."],
  ["The person who made things a little better.", "Sometimes just having someone around makes an ordinary day feel easier."],
  ["The random plans.", "Most plans started with absolutely no idea what we were doing."],
  ["The laughs.", "Usually caused by something that wasn't even supposed to be that funny."],
  ["Still here.", "Somehow, after all these years, there are still new memories being added."]
];

export default function ThingsIRemember({ onMadam }) {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
    if (i === 7) onMadam?.();
  };

  return (
    <section className="section memory-cards-section">
      <div className="section-inner">
        <SectionLabel>02 · little things</SectionLabel>
        <div className="section-heading-row">
          <div>
            <h2>Things I <em>remember.</em></h2>
            <p>Tap a card.</p>
          </div>
          <span className="scribble">some things just stay ↓</span>
        </div>

        <div className="remember-grid">
          {cards.map(([title, text], i) => (
            <button
              className={`remember-card ${open === i ? "is-open" : ""}`}
              key={title}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span className="card-number">{String(i + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <span className="card-reveal">{text}</span>
              <span className="card-action">{open === i ? "close ↑" : "open →"}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
