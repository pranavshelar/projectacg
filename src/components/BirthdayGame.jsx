import { useState } from "react";
import BalloonGame from "./BalloonGame";
import BirthdayCake from "./BirthdayCake";
import SectionLabel from "./SectionLabel";

export default function BirthdayGame({ onMadam }) {
  const [stage, setStage] = useState(0);

  return (
    <section className="section game-section" id="birthday-game">
      <div className="section-inner">
        <SectionLabel>10 · birthday mode</SectionLabel>
        <div className="game-header">
          <h2>Okay, now you have to <em>do something.</em></h2>
          <p>No microphone. No camera. No permissions. Just tap things.</p>
        </div>

        {stage === 0 && <BalloonGame onComplete={() => setStage(1)} onMadam={onMadam} />}
        {stage === 1 && <BirthdayCake onComplete={() => setStage(2)} />}
        {stage === 2 && (
          <div className="game-complete">
            <div className="confetti-burst" aria-hidden="true">✦ ✧ ✦ ✧ ✦</div>
            <p className="eyebrow">BIRTHDAY OFFICIALLY ACTIVATED</p>
            <h3>Happy Birthday, Alisha.</h3>
            <p className="game-sub">21 looks good on you.</p>
            <p>Now go make this year ridiculously memorable.</p>
            <button className="primary-btn" onClick={() => document.getElementById("birthday-message")?.scrollIntoView({ behavior: "smooth" })}>
              Continue ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
