import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "../data/memories";

export default function MusicPlayer() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    a.volume = 0.42;
    const onEnd = () => setPlaying(false);
    a.addEventListener("ended", onEnd);
    return () => a.removeEventListener("ended", onEnd);
  }, []);

  const toggle = async () => {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audio} src={siteConfig.musicPath} preload="none" />
      <button className={`music-btn ${playing ? "playing" : ""}`} onClick={toggle} aria-label="Toggle music">
        {playing ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span>{playing ? "Music on" : "♪ Music"}</span>
        <Music size={14} />
      </button>
    </>
  );
}
