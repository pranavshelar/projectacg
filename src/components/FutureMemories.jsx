import { useState } from "react";
import SectionLabel from "./SectionLabel";

const futureItems = [
  "Another completely unnecessary outing",
  "Another random conversation",
  "Another birthday",
  "Another ridiculous photo",
  "Another spontaneous plan",
  "Another day that wasn't supposed to become a memory",
  "More things we haven't done yet"
];

export default function FutureMemories() {
  const [checked, setChecked] = useState([]);

  const toggle = (i) => setChecked(c => c.includes(i) ? c.filter(x => x !== i) : [...c, i]);

  return (
    <section className="section future-section">
      <div className="section-inner narrow">
        <SectionLabel>12 · plans pending</SectionLabel>
        <h2>Still <em>pending...</em></h2>
        <p className="lead">Some things are better left unchecked for now.</p>

        <div className="future-list">
          {futureItems.map((item, i) => (
            <button className={`future-item ${checked.includes(i) ? "checked" : ""}`} key={item} onClick={() => toggle(i)}>
              <span className="checkbox">{checked.includes(i) ? "✓" : ""}</span>
              <span>{item}</span>
              <small>{checked.includes(i) ? "done-ish" : "pending"}</small>
            </button>
          ))}
        </div>

        <p className="future-end">{checked.length === futureItems.length ? "Okay. Ambitious." : "Looks like we have work to do."}</p>
      </div>
    </section>
  );
}
