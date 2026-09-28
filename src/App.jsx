import { useState } from "react";
import Hero from "./components/Hero";
import DescribeAlisha from "./components/DescribeAlisha";
import ThingsIRemember from "./components/ThingsIRemember";
import MemoryStats from "./components/MemoryStats";
import MemoryScrapbook from "./components/MemoryScrapbook";
import BirthdayMemories from "./components/BirthdayMemories";
import RandomMemories from "./components/RandomMemories";
import ImagicaaSection from "./components/ImagicaaSection";
import OceanSection from "./components/OceanSection";
import SupportSection from "./components/SupportSection";
import BirthdayGame from "./components/BirthdayGame";
import BirthdayMessage from "./components/BirthdayMessage";
import FutureMemories from "./components/FutureMemories";
import OceanConstellation from "./components/OceanConstellation";
import FinalMessage from "./components/FinalMessage";
import MusicPlayer from "./components/MusicPlayer";
import EasterEgg from "./components/EasterEgg";

export default function App() {
  const [madamCount, setMadamCount] = useState(0);

  const madam = () => setMadamCount(c => Math.min(c + 1, 3));

  return (
    <main>
      <Hero />
      <DescribeAlisha />
      <ThingsIRemember onMadam={madam} />
      <MemoryStats />
      <MemoryScrapbook />
      <BirthdayMemories />
      <RandomMemories />
      <ImagicaaSection onMadam={madam} />
      <OceanSection />
      <SupportSection />
      <BirthdayGame onMadam={madam} />
      <BirthdayMessage />
      <FutureMemories />
      <OceanConstellation />
      <FinalMessage />
      <MusicPlayer />
      <EasterEgg madamCount={madamCount} />
    </main>
  );
}
