import React, { useState } from "react";
import "./projet.component.scss";

interface ProjetProp {
  nom: string;
  description: string;
  tags: string[];
  img_url: string;
  img_alt: string;
}

const Projet: React.FC<ProjetProp> = (prop: ProjetProp) => {
  const [showModal, setShowModal] = useState(false);

  // Fonction pour basculer la modale
  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche le saut de page si c'est un <a>
    setShowModal(!showModal);
  };

  return (
    <div className="projetContainer">
      <div className="imgProjet">
        <img src={prop.img_url} alt={prop.img_alt} />
        <div className="projetTags">
          {prop.tags.map((tag, index) => (
            <div key={index} className="compItem">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="projetNom">{prop.nom}</div>
      <div className="projetDescription">{prop.description}</div>

      {/* Le bouton déclencheur */}
      <button className="moreButton" onClick={toggleModal}>
        En savoir plus
      </button>

      {/* Rendu conditionnel de la Modale */}
      {showModal && (
        <div className="modalOverlay" onClick={toggleModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={toggleModal}>
              ×
            </button>

            <h2>{prop.nom}</h2>
            <img src={prop.img_url} alt={prop.img_alt} className="modalImg" />

            <div className="modalDetails">
              <h3>Détails du projet</h3>
              <p>{prop.description}</p>
              {/* Ajoute ici d'autres détails : date, lien github, etc. */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;
