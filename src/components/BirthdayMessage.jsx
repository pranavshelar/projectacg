import SectionLabel from "./SectionLabel";

export default function BirthdayMessage() {
  return (
    <section className="section letter-section" id="birthday-message">
      <div className="letter-paper">
        <SectionLabel>11 · one thing I wanted to say</SectionLabel>
        <h2>One thing I wanted <em>to say.</em></h2>
        <div className="letter-body">
          <p>Looking back, it's kind of funny how many memories we've collected without really trying.</p>
          <p>School, tuition, birthdays, random plans, conversations, and then Imagicaa...</p>
          <p>Some of those days probably felt completely normal at the time.</p>
          <p>But looking back at them now...</p>
          <p>They're actually pretty nice to have.</p>
          <p>I'm really glad you've been part of so many of those memories.</p>
          <p>Some people are around for a chapter.</p>
          <p>Some people somehow keep showing up in the story.</p>
          <p>You're definitely one of those people.</p>
          <p>And whatever this next year brings...</p>
          <p>I hope it brings you more reasons to smile, more peaceful days, more ridiculous plans, and plenty of moments worth remembering.</p>
          <p>And if you ever need someone to laugh with, talk to, or simply bother...</p>
          <p>Well.</p>
          <p>You know.</p>
        </div>
        <div className="letter-signoff">
          <strong>Happy Birthday, Alisha.</strong>
          <span>— Pranav</span>
        </div>
      </div>
    </section>
  );
}
