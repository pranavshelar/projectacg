import SectionLabel from "./SectionLabel";

export default function OceanSection() {
  return (
    <section className="ocean-section">
      <div className="ocean-sky" />
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />
      <div className="sun-glow" />
      <div className="ocean-horizon" />
      <div className="waves waves-a" />
      <div className="waves waves-b" />
      <div className="bird bird-a">⌁</div>
      <div className="bird bird-b">⌁</div>
      <div className="ocean-content section-inner">
        <SectionLabel>08 · somewhere by the sea</SectionLabel>
        <h2>Somewhere by <em>the sea...</em></h2>
        <p className="ocean-line">I know the sea makes things feel a little lighter.</p>
        <div className="ocean-message">
          <p>Maybe because some things don't need fixing immediately.</p>
          <p>Sometimes you just need a little space.</p>
          <p>And a reason to breathe.</p>
        </div>
        <div className="ocean-message">
          <p>Whatever this year brings...</p>
          <p>Take the good days.</p>
          <p>Take the slow days.</p>
          <p>Take the days where you don't have everything figured out.</p>
        </div>
        <p className="ocean-emphasis">You don't have to have everything figured out.</p>
        <p className="ocean-support">
          And whenever you need someone to laugh with, talk to, or simply annoy...
          <br /><strong>You know where to find me.</strong>
        </p>
      </div>
    </section>
  );
}
