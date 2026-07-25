import { useState } from "react";
import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import "./parcours.component.scss";
import postes from "../../data/postes.json";
import Poste from "./poste/poste.component";

type ParcoursTab = "pro" | "asso";

const Parcours = () => {
  const [activeTab, setActiveTab] = useState<ParcoursTab>("pro");

  return (
    <section id="parcours" className="parcours">
      <SectionTitleComponent titre="Mon Parcours" sub="Suivez" />
      <div className="parcoursContent">
        <div className="parcoursTitle">
          <div className="texteParcoursTitle">
            <h2 className="titreParcoursItem">Professionnel</h2>
            <h3 className="subParcoursItem">IT & Gestion de Projets</h3>
          </div>
          <div className="texteParcoursTitle">
            <h2 className="titreParcoursItem">Associatif</h2>
            <h3 className="subParcoursItem">Local & National</h3>
          </div>
        </div>

        {/* Sélecteur d'onglets, mobile uniquement */}
        <div className="parcoursTabs">
          <button
            className={activeTab === "pro" ? "active" : ""}
            onClick={() => setActiveTab("pro")}
          >
            Professionnel
          </button>
          <button
            className={activeTab === "asso" ? "active" : ""}
            onClick={() => setActiveTab("asso")}
          >
            Associatif
          </button>
        </div>

        <div className="parcoursContainer">
          <div
            className={`parcoursPro${activeTab === "pro" ? " active" : ""}`}
          >
            {postes.postes
              .filter((poste) => poste.type === "pro")
              .map((poste, index) => (
                <div
                  key={poste.id}
                  className="posteRow"
                  style={{ gridRow: index + 1 }}
                >
                  <Poste {...poste} />
                </div>
              ))}
          </div>

          <div className="breakLineParcours"></div>

          <div
            className={`parcoursAsso${activeTab === "asso" ? " active" : ""}`}
          >
            {postes.postes
              .filter((poste) => poste.type === "asso")
              .map((poste, index) => (
                <div
                  key={poste.id}
                  className="posteRow"
                  style={{ gridRow: index + 1 }}
                >
                  <Poste {...poste} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
