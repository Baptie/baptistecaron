import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import "./parcours.component.scss";
import postes from "../../data/postes.json";
import Poste from "./poste/poste.component";

const Parcours = () => {
  return (
    <section id="parcours" className="parcours">
      <SectionTitleComponent titre="Mon Parcours" sub="Suivez" />
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

      <div className="parcoursContainer">
        <div className="parcoursPro">
          {postes.postes.map((poste) => {
            if (poste.type === "pro") {
              return (
                <Poste
                  id={poste.id}
                  poste={poste.poste}
                  societe={poste.societe}
                  date_debut={poste.date_debut}
                  date_fin={poste.date_fin}
                  img_url={poste.img_url}
                  img_alt={poste.img_alt}
                  /** description={poste.description} */
                  color={poste.color}
                  color2={poste.color2}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>

        <div className="breakLineParcours"></div>

        <div className="parcoursAsso">
          {postes.postes.map((poste) => {
            if (poste.type === "asso") {
              return (
                <Poste
                  id={poste.id}
                  poste={poste.poste}
                  societe={poste.societe}
                  date_debut={poste.date_debut}
                  date_fin={poste.date_fin}
                  img_url={poste.img_url}
                  img_alt={poste.img_alt}
                  /** description={poste.description} */
                  color={poste.color}
                  color2={poste.color2}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Parcours;
