import SectionLabel from "./SectionLabel";

export default function SupportSection() {
  return (
    <section className="section support-section">
      <div className="section-inner narrow centered">
        <SectionLabel>09 · a small reminder</SectionLabel>
        <p className="big-reminder">You don't have to make every day a great day.</p>
        <p className="big-reminder secondary">Some days can simply be okay.</p>
        <p className="big-reminder italic">And that's okay too.</p>

        <div className="support-list">
          <p>I hope this year gives you more reasons to smile.</p>
          <p>More peaceful days.</p>
          <p>More spontaneous plans.</p>
          <p>More things to look forward to.</p>
          <p>And people who remind you that you matter.</p>
        </div>
      </div>
    </section>
  );
}
