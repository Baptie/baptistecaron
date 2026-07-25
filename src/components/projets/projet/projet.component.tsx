import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./projet.component.scss";

interface ImpactMetric {
  num: string;
  lbl: string;
}

interface ProjetProp {
  id: number;
  nom: string;
  contexte: string;
  tags: string[];
  img_url: string;
  img_alt: string;
  status: string;
  role: string;
  periode: string;
  duree: string;
  actions: string[];
  impact: ImpactMetric[];
}

const MAX_TILT_DEG = 5;
const HOVER_SCALE = 1.05;

const REST_TILT = {
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  glareAngle: 115,
  glareOpacity: 0,
  shadowX: 0,
  shadowY: 25,
};

const Projet: React.FC<ProjetProp> = (prop: ProjetProp) => {
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(REST_TILT);
  const [hovering, setHovering] = useState(false);

  // Fonction pour basculer la modale
  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche le saut de page si c'est un <a>
    setShowModal(!showModal);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Effet réservé aux pointeurs fins (souris) : évite un tilt fantôme au tap sur tactile
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setHovering(true);
    setTilt({
      rotateY: (px - 0.5) * 2 * MAX_TILT_DEG,
      rotateX: (0.5 - py) * 2 * MAX_TILT_DEG,
      scale: HOVER_SCALE,
      // La lumière balaie la carte dans l'axe du tilt
      glareAngle: Math.atan2(py - 0.5, px - 0.5) * (180 / Math.PI) + 90,
      glareOpacity: 0.25,
      // L'ombre se décale dans le même sens que le curseur, comme si la carte se soulevait de ce côté
      shadowX: (px - 0.5) * 50,
      shadowY: (py - 0.5) * 20 + 25,
    });
  };

  const resetTilt = () => {
    setHovering(false);
    setTilt(REST_TILT);
  };

  return (
    <div
      className="projetContainer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        ...(hovering && {
          boxShadow: `${tilt.shadowX}px ${tilt.shadowY}px 30px -15px rgba(61, 143, 124, 0.5)`,
        }),
      }}
    >
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

      {/* Effet de lumière qui suit le tilt */}
      <div
        className="cardGlare"
        style={{
          background: `linear-gradient(${tilt.glareAngle}deg, rgba(255, 255, 255, ${tilt.glareOpacity}) 0%, rgba(255, 255, 255, 0) 60%)`,
        }}
      />

      {/* Rendu conditionnel de la Modale, en dehors du flux du carousel */}
      {showModal &&
        createPortal(
          <div className="modalOverlay" onClick={toggleModal}>
            <div className="projetCard" onClick={(e) => e.stopPropagation()}>
              <div className="projetTab">
                <span>
                  Dossier projet — N°{String(prop.id + 1).padStart(2, "0")}
                </span>
              </div>

              <button
                className="closeModal"
                onClick={toggleModal}
                aria-label="Fermer"
              >
                ×
              </button>

              <div className="status">{prop.status}</div>

              <h1>{prop.nom}</h1>
              <div className="meta">
                <span>
                  Rôle : <b>{prop.role}</b>
                </span>
                <span>
                  Période : <b>{prop.periode}</b>
                </span>
                <span>
                  Durée : <b>{prop.duree}</b>
                </span>
              </div>

              <div className="section">
                <p className="eyebrow">Contexte</p>
                <p className="bodyText">{prop.contexte}</p>
              </div>

              <div className="section">
                <p className="eyebrow">Actions clés</p>
                <ul className="actionsList">
                  {prop.actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <p className="eyebrow">Impact</p>
                <div className="metrics">
                  {prop.impact.map((metric, index) => (
                    <div className="metric" key={index}>
                      <span className="num">{metric.num}</span>
                      <span className="lbl">{metric.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <p className="eyebrow">Stack &amp; méthodes</p>
                <div className="chips">
                  {prop.tags.map((tag, index) => (
                    <span className="chip" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="contactMeProjets"
                href="mailto:contact.baptistecaron@gmail.com"
              >
                &#x21AA; Me contacter pour en savoir plus
              </a>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Projet;
