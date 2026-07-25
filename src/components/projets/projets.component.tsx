import { useRef, useState } from "react";
import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import "./projets.component.scss";
import projets from "../../data/projets.json";
import Projet from "./projet/projet.component";

const Projets = () => {
  const recentProjects = projets.projets.slice(-6);
  const track = [...recentProjects, ...recentProjects];

  const [activeCard, setActiveCard] = useState(0);
  const swipeTrackRef = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef<number | null>(null);

  const handleSwipeScroll = () => {
    if (scrollFrame.current) cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = requestAnimationFrame(() => {
      const el = swipeTrackRef.current;
      if (!el || el.children.length < 1) return;
      const first = el.children[0] as HTMLElement;
      const second = el.children[1] as HTMLElement | undefined;
      const step = second ? second.offsetLeft - first.offsetLeft : first.clientWidth;
      if (step <= 0) return;
      const index = Math.round(el.scrollLeft / step);
      setActiveCard(Math.min(recentProjects.length - 1, Math.max(0, index)));
    });
  };

  return (
    <section id="projets" className="projetsSection">
      <SectionTitleComponent titre="Mes projets récents" sub="Cas d'étude" />

      {/* --- Desktop : défilement automatique en boucle --- */}
      <div className="projects-carousel">
        <div className="projects-track">
          {track.map((projet, index) => (
            <div className="carousel-card" key={`${projet.id}-${index}`}>
              <Projet {...projet} />
            </div>
          ))}
        </div>
      </div>
      <div className="projects-progress">
        <div className="projects-progress-fill"></div>
      </div>

      {/* --- Mobile : swipe manuel + pagination --- */}
      <div
        className="projects-swipe"
        ref={swipeTrackRef}
        onScroll={handleSwipeScroll}
      >
        {recentProjects.map((projet) => (
          <div className="carousel-card" key={projet.id}>
            <Projet {...projet} />
          </div>
        ))}
      </div>
      <div className="projects-dots">
        {recentProjects.map((projet, index) => (
          <span
            key={projet.id}
            className={`projects-dot${index === activeCard ? " active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projets;
