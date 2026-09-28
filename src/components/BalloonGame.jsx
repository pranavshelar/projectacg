import { useMemo, useState } from "react";
import { PartyPopper } from "lucide-react";

const balloons = [
  "21!", "Finally.", "Still chaotic.", "Birthday mode.", "MADAM", "Yay!", "✨", "Okay!"
];

export default function BalloonGame({ onComplete, onMadam }) {
  const [popped, setPopped] = useState([]);

  const positions = useMemo(() => balloons.map((_, i) => ({
    left: `${8 + ((i * 37) % 78)}%`,
    top: `${8 + ((i * 53) % 68)}%`,
    "--float": `${1.7 + (i % 4) * .35}s`,
    "--delay": `${i * 70}ms`
  })), []);

  const pop = (i) => {
    if (popped.includes(i)) return;
    const next = [...popped, i];
    setPopped(next);
    if (i === 4) onMadam?.();
    if (next.length === balloons.length) setTimeout(onComplete, 500);
  };

  return (
    <div className="balloon-game">
      <div className="game-instruction">
        <PartyPopper size={22} />
        <h3>Before we continue...</h3>
        <p>There's something you have to do.</p>
        <strong>Pop the balloons.</strong>
        <span>{popped.length} / {balloons.length}</span>
      </div>
      <div className="balloon-stage">
        {balloons.map((label, i) => !popped.includes(i) && (
          <button
            className={`balloon balloon-${i % 5}`}
            style={positions[i]}
            key={i}
            onClick={() => pop(i)}
            aria-label={`Pop balloon ${i + 1}`}
          >
            <i />
            <span>{i === 4 || i === 0 ? label : ""}</span>
          </button>
        ))}
        {popped.length === balloons.length && <p className="all-popped">Okay. Now we're getting somewhere.</p>}
      </div>
    </div>
  );
}
