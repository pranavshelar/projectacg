import { useState } from "react";

export default function BirthdayCake({ onComplete }) {
  const [wished, setWished] = useState(false);
  const [cut, setCut] = useState(false);

  const wish = () => setWished(true);
  const cutCake = () => {
    if (!wished) return;
    setCut(true);
    setTimeout(onComplete, 1100);
  };

  return (
    <div className={`cake-game ${wished ? "wished" : ""} ${cut ? "cut" : ""}`}>
      <div className="cake-instruction">
        <p className="eyebrow">STEP 2 · MAKE A WISH</p>
        <h3>Twenty-one candles.</h3>
        <p>No microphone required.</p>
      </div>

      <div className="cake-scene">
        <div className="cake-stars">✦　·　✧　·　✦</div>
        <div className="cake">
          <div className="candles">
            {Array.from({ length: 21 }).map((_, i) => (
              <span key={i} className="candle">
                <i />
              </span>
            ))}
          </div>
          <div className="cake-top" />
          <div className="cake-body">
            <span>21</span>
          </div>
          <div className="cake-plate" />
        </div>
        {wished && <div className="wish-text">Wish made.</div>}
        {cut && <div className="cake-split">✦ ✧ ✦</div>}
      </div>

      <div className="cake-controls">
        {!wished ? (
          <button className="primary-btn" onClick={wish}>Make a wish ✨</button>
        ) : (
          <button className="primary-btn" onClick={cutCake}>Cut the cake 🎂</button>
        )}
      </div>
    </div>
  );
}
