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
              <div className="tagsModal">
                {prop.tags.map((tag, index) => (
                  <div key={index} className="compItem">
                    {tag}
                  </div>
                ))}
              </div>
              <p>{prop.description}</p>
            </div>
            <a
              className="contactMeProjets"
              href="mailto:contact.baptistecaron@gmail.com"
            >
              &#x21AA; Me contacter pour en savoir plus
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;
