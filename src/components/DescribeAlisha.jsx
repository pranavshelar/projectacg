import SectionLabel from "./SectionLabel";

const words = [
  ["Funny", "Genuinely."],
  ["Kind", ""],
  ["Chaotic", ""],
  ["Smart", "More than you admit."],
  ["Unpredictable", ""],
  ["Beautiful", "Definitely."],
  ["Annoying", "Okay... sometimes."],
  ["Genuinely caring", ""],
  ["Important", ""],
  ["A little dramatic", ""],
  ["More capable than you think", ""]
];

export default function DescribeAlisha() {
  return (
    <section className="section cream-section describe">
      <div className="section-inner">
        <SectionLabel>01 · the impossible description</SectionLabel>
        <h2>If I had to <em>describe you...</em></h2>

        <div className="word-cloud">
          {words.map(([word, note], i) => (
            <div className={`word word-${i + 1}`} key={word}>
              <span>{word}</span>
              {note && <small>{note}</small>}
            </div>
          ))}
        </div>

        <div className="describe-ending">
          <p>Some people are difficult to describe in a few words.</p>
          <strong>You're one of them.</strong>
        </div>
      </div>
    </section>
  );
}
