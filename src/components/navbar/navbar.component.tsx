import { useEffect } from "react";
import "./navbar.component.scss";

const Navbar = () => {
  useEffect(() => {
    // Function to handle smooth scrolling
    function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      const navbarElement = document.querySelector(
        ".navbarContainer"
      ) as HTMLElement;
      const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;

      if (targetElement) {
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
        <a href="/" className="contactButton">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
