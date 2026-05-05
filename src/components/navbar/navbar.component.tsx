import { useEffect, useState } from "react"; // Ajout de useState
import "./navbar.component.scss";

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Ton code de Smooth Scroll existant reste ici...
    // (Pense juste à vérifier que le bouton Contact n'est pas inclus
    // dans la boucle smooth scroll s'il n'a pas de href="#id")
  }, []);

  const toggleContact = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la redirection vers "/"
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="navbarContainer">
      <img src="/img/logobaptie.png" alt="Logo" className="logoNavbar" />
      <div className="navbar">
        <a className="itemNavbar" href="#accueil">
          Accueil
        </a>
        <a className="itemNavbar" href="#presentation">
          Informations
        </a>
        <a className="itemNavbar" href="#projets">
          Porfolio
        </a>
        <a className="itemNavbar" href="#parcours">
          Parcours
        </a>

        {/* On change le href et on ajoute le onClick */}
        <a href="#contact" className="contactButton" onClick={toggleContact}>
          Contact
        </a>
      </div>

      {/* --- MODALE DE CONTACT --- */}
      {isContactOpen && (
        <div className="contactModalOverlay" onClick={toggleContact}>
          <div
            className="contactModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeModal" onClick={toggleContact}>
              ×
            </button>

            <h2>Me contacter</h2>
            <p>Un projet ? Une question ? N'hésitez pas à me joindre :</p>

            <div className="contactLinks">
              <a href="mailto:ton-email@exemple.com" className="contactItem">
                <img
                  src="/img/applemail_logo.png"
                  alt="Logo LinkedIn"
                  className="imgContactIcon"
                />
                contact.baptistecaron@gmail.com
              </a>

              <a
                href="http://linkedin.com/in/caron-baptiste/"
                className="contactItem"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/linkedin_logo.png"}
                  alt="Logo LinkedIn"
                  className="imgContactIcon"
                />
                LinkedIn
              </a>

              <a
                href="https://www.malt.fr/profile/baptistecaron"
                className="contactItem"
              >
                <img
                  src={process.env.PUBLIC_URL + "/img/malt_logo.png"}
                  alt="Logo LinkedIn"
                  className="imgContactIcon"
                />
                Malt
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
