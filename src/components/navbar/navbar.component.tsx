import { useTranslation } from "react-i18next";
import LangageSelector from "./langageSelector.component";
import { useEffect } from "react";

const Navbar = () => {
    const {t} = useTranslation();
    useEffect(() => {
        // Function to handle smooth scrolling
        function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId || '');

            if (targetElement) {
                const navbarElement = document.querySelector('.navbar') as HTMLElement;
                const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;

                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth',
                });
                window.addEventListener("scroll", () => {
                    if (window.scrollY > 50) {
                        navbarElement.style.backgroundColor = "rgba(4, 6, 21, 0.5)"; // Fond avec fond flou
                    } else {
                        navbarElement.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Fond transparent
                    }
                });
            }

        }

        // Attach event listeners to navbar links
        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll as unknown as EventListener);
        });

        // Clean up event listeners on component unmount
        return () => {
            navbarLinks.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll as unknown as EventListener);
            });
        };

    }, []);
    
    return (
        <div className="navbar">
                <a href="#accueil">{t('accueil_libelle')}</a>
                <a href="#presentation">{t('a_propos_libelle')}</a>
                <a href="#etudes">{t('parcours_scolaire_libelle')}</a>
                <a href="#parcoursPro">{t('experience_pro_libelle')}</a>
                <a href="#competences">{t('competences_libelle')}</a>
                <LangageSelector/>
            </div>
    );
}

export default Navbar;