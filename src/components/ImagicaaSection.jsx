import { Camera, Utensils, Ticket, Laugh, Zap } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function ImagicaaSection({ onMadam }) {
  return (
    <section className="section imagicaa-section" id="imagicaa">
      <div className="ride-line" aria-hidden="true"><span /></div>
      <div className="section-inner">
        <SectionLabel>07 · june 2026</SectionLabel>
        <div className="imagicaa-copy">
          <p className="park-kicker">ONE DAY · TOO MANY RIDES</p>
          <h2>And then came <em>Imagicaa.</em></h2>
          <p className="lead">
            Some plans happen because someone really, really wants to go.
          </p>
          <p>And then came one of those days that was completely worth remembering.</p>
        </div>

        <div className="park-gallery">
          <div className="park-card large">
  <img
    src="/images/imagicaa-last.jpg"
    alt="Imagicaa memory"
  />
  <span>01 · the day</span>
</div>
          <div className="park-card"><Camera /><span>photos</span></div>
          <div className="park-card"><Ticket /><span>ticket energy</span></div>
          <div className="park-card"><Utensils /><span>food</span></div>
          <div className="park-card"><Laugh /><span>random moments</span></div>
          <div className="park-card"><Zap /><span>questionable decisions</span></div>
        </div>

        <div className="ride-sequence">
          {["One day.", "Too many rides.", "Too many photos.", "Probably questionable decisions.", "Definitely worth remembering."].map((x, i) => (
            <span key={x} style={{ "--delay": `${i * 80}ms` }}>{x}</span>
          ))}
        </div>

        <button className="madam-chip" onClick={onMadam}>Good call, Madam.</button>
      </div>
    </section>
  );
}
