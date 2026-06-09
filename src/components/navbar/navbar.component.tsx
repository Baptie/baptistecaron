import { useEffect, useState } from "react";
import "./navbar.component.scss";

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Function to handle smooth scrolling
    function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        const navbarElement = document.querySelector(
          ".navbarContainer"
        ) as HTMLElement;
        const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }

    // Attach event listeners to navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach((link) => {
      link.addEventListener(
        "click",
        handleSmoothScroll as unknown as EventListener
      );
    });

    // Clean up event listeners on component unmount
    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener(
          "click",
          handleSmoothScroll as unknown as EventListener
        );
      });
    };
  }, []);

  const toggleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="navbarContainer">
      <img src="/img/logobaptie.png" alt="Logo" className="logoNavbar" />
      <div className="navbar">
        <a className="itemNavbar" href="#accueil">
          Accueil
        </a>

        <a className="itemNavbar" href="#projets">
          Porfolio
        </a>
        <a className="itemNavbar" href="#parcours">
          Parcours
        </a>

        <a className="itemNavbar" href="#presentation">
          Informations
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
              <a
                href="mailto:contact.baptistecaron@gmail.com"
                className="contactItem"
              >
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
