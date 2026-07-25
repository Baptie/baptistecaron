import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./navbar.component.scss";

const NAV_SECTIONS = [
  { id: "accueil", label: "Accueil" },
  { id: "projets", label: "Portfolio" },
  { id: "parcours", label: "Parcours" },
  { id: "presentation", label: "Infos" },
];

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const HomeIcon = () => (
  <svg {...iconProps}>
    <polyline points="4 11 12 4 20 11" />
    <path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" />
  </svg>
);

const PortfolioIcon = () => (
  <svg {...iconProps}>
    <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
    <path d="M8.5 7.5v-2a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2" />
    <line x1="3.5" y1="12.5" x2="20.5" y2="12.5" />
  </svg>
);

const ParcoursIcon = () => (
  <svg {...iconProps}>
    <circle cx="5" cy="18" r="2" />
    <circle cx="12" cy="8" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M6.6 16.6 10.4 9.8" />
    <path d="M17.4 16.6 13.6 9.8" />
  </svg>
);

const InfoIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <circle cx="12" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const ContactIcon = () => (
  <svg {...iconProps}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <polyline points="4 6.5 12 13 20 6.5" />
  </svg>
);

const NAV_ICONS: Record<string, () => JSX.Element> = {
  accueil: HomeIcon,
  projets: PortfolioIcon,
  parcours: ParcoursIcon,
  presentation: InfoIcon,
};

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

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

    // Attach event listeners to navbar links (barre du haut + bottom tab bar)
    const navbarLinks = document.querySelectorAll(".navbar a, .bottomNav a");
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

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    // L'observer ne renvoie que les entrées dont le seuil a changé depuis le
    // dernier callback, pas l'état complet des 4 sections : on garde donc le
    // dernier ratio connu de chacune pour comparer sur l'ensemble à jour.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) {
          setActiveSection(bestId);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

      {/* --- BARRE D'ONGLETS MOBILE --- */}
      <nav className="bottomNav">
        {NAV_SECTIONS.map((section) => {
          const Icon = NAV_ICONS[section.id];
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`bottomNavItem${
                activeSection === section.id ? " active" : ""
              }`}
            >
              <Icon />
              <span>{section.label}</span>
            </a>
          );
        })}
        <button
          className="bottomNavItem bottomNavContact"
          onClick={toggleContact}
        >
          <ContactIcon />
          <span>Contact</span>
        </button>
      </nav>

      {/* --- MODALE DE CONTACT, même style "dossier" que la popup projet ---
          Rendue via un portail : .navbarContainer a un backdrop-filter, qui
          en ferait sinon le containing block d'un enfant position:fixed. */}
      {isContactOpen &&
        createPortal(
          <div className="modalOverlay" onClick={toggleContact}>
            <div
              className="projetCard contactCard"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="projetTab">
                <span>Contact</span>
              </div>

              <button
                className="closeModal"
                onClick={toggleContact}
                aria-label="Fermer"
              >
                ×
              </button>

              <div className="status">Contact direct</div>

              <h1>Me contacter</h1>

              <div className="section">
                <p className="bodyText">
                  Un projet ? Une question ? N'hésitez pas à me joindre :
                </p>
              </div>

              <div className="section">
                <p className="eyebrow">Coordonnées</p>
                <div className="contactLinks">
                  <a
                    href="mailto:contact.baptistecaron@gmail.com"
                    className="contactItem"
                  >
                    <img
                      src="/img/applemail_logo.png"
                      alt=""
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
                      alt=""
                      className="imgContactIcon"
                    />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Navbar;
