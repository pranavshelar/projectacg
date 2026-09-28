import { RotateCcw } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function FinalMessage() {
  const replay = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="final-section">
      <div className="final-glow" />
      <div className="final-waves" />
      <div className="final-inner">
        <SectionLabel>14 · the end... for now</SectionLabel>
        <h2>Happy Birthday,<br /><em>Alisha.</em></h2>
        <div className="final-age">21.</div>
        <div className="final-lines">
          <p>Here's to more random plans.</p>
          <p>More stupid jokes.</p>
          <p>More peaceful days.</p>
          <p>More reasons to smile.</p>
          <p>More memories.</p>
        </div>
        <p className="final-support">And whenever life gets a little messy...</p>
        <p className="final-support strong">You don't have to figure everything out alone.</p>
        <h3>Now go have a ridiculously good year.</h3>
        <span className="signature">— Pranav</span>
        <p className="final-madam">Happy Birthday, Madam.</p>

        <div className="last-memory">
          <div className="last-photo">
  <div>
    <span>ONE LAST MEMORY</span>
    <img
      src="/images/final.jpg"
      alt="One last memory"
    />
  </div>
</div>
          <p>Let's make more.</p>
        </div>

        <button className="replay-btn" onClick={replay}><RotateCcw size={16} /> Replay the birthday</button>
      </div>
    </section>
  );
}
