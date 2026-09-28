import { ArrowDown } from "lucide-react";
import { siteConfig } from "../data/memories";
import SectionLabel from "./SectionLabel";

export default function Hero() {
  const begin = () => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="top">
      <div className="hero-sky" />
      <div className="hero-grain" />
      <div className="hero-horizon"><span /></div>
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => <i key={i} style={{ "--i": i }} />)}
      </div>

      <div className="hero-content">
        <SectionLabel>A tiny birthday scrapbook</SectionLabel>
        <p className="eyebrow reveal reveal-1">29 · 09 · 2026</p>
        <h1 className="hero-title reveal reveal-2">Hey {siteConfig.name}.</h1>
        <p className="hero-sub reveal reveal-3">I made something for you.</p>
        <p className="hero-note reveal reveal-4">
          Because apparently a normal “Happy Birthday” wasn't enough.
        </p>
        <p className="hero-age reveal reveal-5">Also... it's your 21st.</p>
        <p className="hero-madam reveal reveal-6">Happy Birthday, Madam.</p>
        <button className="primary-btn reveal reveal-7" onClick={begin}>
          Okay, let's begin <ArrowDown size={17} />
        </button>
      </div>

      <div className="scroll-hint">scroll slowly <span>↓</span></div>
    </section>
  );
}
