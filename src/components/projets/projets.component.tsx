import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import "./projets.component.scss";
import projets from "../../data/projets.json";
import Projet from "./projet/projet.component";
import { useState } from "react";

const Projets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = projets.projets;

  // Séparation de la liste
  const featuredProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);

  return (
    <section id="projets" className="projetsSection">
      <SectionTitleComponent titre="Mes projets récents" sub="Cas d'étude" />
      <div className="projects-container">
        <div className="projects-grid">
          {featuredProjects.map((projet) => (
            <Projet
              nom={projet.nom}
              description={projet.description}
              tags={projet.tags}
              img_url={projet.img_url}
              img_alt={projet.img_alt}
            />
          ))}
        </div>

        {/* 2. Le reste des projets (Animé) */}
        <div className={`expand-wrapper ${isOpen ? "is-open" : ""}`}>
          <div className="expand-content">
            <div className="projects-grid secondary">
              {remainingProjects.map((projet) => (
                <Projet
                  nom={projet.nom}
                  description={projet.description}
                  tags={projet.tags}
                  img_url={projet.img_url}
                  img_alt={projet.img_alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 3. Bouton de contrôle */}
      {projects.length > 3 && (
        <button
          className={`btn-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Voir moins" : "Voir tous mes projets"}
        </button>
      )}
    </section>
  );
};

export default Projets;
