import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import './navbar.component.scss';
import home from '../../assets/navbar/home.png';
import about from '../../assets/navbar/id-card.png';
import school from '../../assets/navbar/graduation-cap.png';
import competences from '../../assets/navbar/competency.png';
import suitcase from '../../assets/navbar/suitcase.png';
import hand from '../../assets/navbar/hand.png';

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
                    top: targetElement.offsetTop + navbarHeight,
                    behavior: 'smooth',
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
        <div className="navbarContainer">
            <div className="navbar">
                <a className="itemNavbar" href="#accueil">
                    <img src={home} alt="" className="iconNavbar" />
                </a>
                <a className="itemNavbar" href="#presentation">
                    <img src={about} alt="" className="iconNavbar" />
                </a>
                <a className="itemNavbar" href="#competences">
                    <img src={competences} alt="" className="iconNavbar" />
                </a>
                <a className="itemNavbar" href="#parcoursPro">
                    <img src={suitcase} alt="" className="iconNavbar" />
                </a>
                <a className="itemNavbar" href="#associatif">
                    <img src={hand} alt="" className="iconNavbar" />
                </a>
            </div>
                
        </div>
    );
}

export default Navbar;