import { Image as ImageIcon, Paperclip } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { memories } from "../data/memories";

function MemoryVisual({ memory }) {
  return memory.image ? (
    <img src={memory.image} alt={memory.title} loading="lazy" />
  ) : (
    <div className="photo-placeholder">
      <ImageIcon size={28} />
      <span>ADD PHOTO</span>
    </div>
  );
}

export default function MemoryScrapbook() {
  return (
    <section className="section scrapbook-section">
      <div className="section-inner">
        <SectionLabel>04 · the scrapbook</SectionLabel>
        <div className="section-heading-row">
          <div>
            <h2>A box of <em>memories.</em></h2>
            <p>Photos are optional. The memories aren't.</p>
          </div>
          <Paperclip className="paperclip" />
        </div>

        <div className="scrapbook">
          {memories.map((memory, i) => (
            <article className={`polaroid polaroid-${i + 1}`} key={`${memory.title}-${i}`}>
              <div className="photo-frame"><MemoryVisual memory={memory} /></div>
              <span className="polaroid-category">{memory.category}</span>
              <h3>{memory.title}</h3>
              <p>{memory.caption}</p>
              <span className="photo-date">{i % 2 === 0 ? "kept here" : "worth keeping"}</span>
            </article>
          ))}
          <div className="scrap-sticker sticker-1">KEEP THIS</div>
          <div className="scrap-sticker sticker-2">MEMORY BOX</div>
        </div>
      </div>
    </section>
  );
}
