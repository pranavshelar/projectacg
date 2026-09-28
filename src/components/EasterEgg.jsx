import { useEffect, useState } from "react";

export default function EasterEgg({ madamCount }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (madamCount >= 3) setOpen(true);
  }, [madamCount]);

  if (!open) return null;

  return (
    <div className="egg-overlay" role="dialog" aria-label="Secret message">
      <div className="egg-card">
        <span>SECRET FOUND ✦</span>
        <h3>Okay Madam, you found the secret.</h3>
        <p>Now stop investigating.</p>
        <strong>Go enjoy your birthday.</strong>
        <button onClick={() => setOpen(false)}>Okay, okay →</button>
      </div>
    </div>
  );
}
