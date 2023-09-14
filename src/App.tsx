import React, {useEffect} from 'react';
import './styles/App.scss';
import './styles/Effects.scss';
import LangageSelector from "./components/LangageSelector";
import {useTranslation} from "react-i18next";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Competences from "./components/Competences";
import ExperiencePro from "./components/ExpPro";

function App() {
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

    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <div className="App">
            <header className="framer-top"></header>
            <div className="navbar">
                <a href="#accueil">{t('accueil_libelle')}</a>
                <a href="#presentation">{t('a_propos_libelle')}</a>
                <a href="#etudes">{t('parcours_scolaire_libelle')}</a>
                <a href="#parcoursPro">{t('experience_pro_libelle')}</a>
                <a href="#competences">{t('competences_libelle')}</a>
                <LangageSelector/>
            </div>

            <div className="content">
                <section id="accueil" className="accueil">
                    <div className="image-container">
                        <img
                            src="/photo_baptie.jpeg"
                            alt="Baptiste PP"
                            className="rounded-image"
                        />
                    </div>
                    <div className="intitulé">
                        <p className="nom">Baptiste CARON</p>
                        <p className="poste">{t('poste')}</p>
                    </div>
                </section>


                <section id="presentation" className="presentation">
                    <h1 className="sectionTitle">{t('a_propos_libelle')}</h1>
                    <div className="texte">
                        <div className="texteSection">
                            <p>{t('presentation')}</p>
                        </div>
                    </div>

                </section>

                <section id="etudes" className="etudes">
                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('parcours_scolaire_libelle')}</h1>
                        <div className="bloc">{t('licence')}</div>
                        <div className="bloc">{t('master')}</div>
                        <div className="bloc">{t('bac')}</div>
                    </div>
                </section>

                <ExperiencePro/>

                <Competences/>

                <Hobbies/>
            </div>
            <div className="framer-bot"></div>
            <Footer/>
        </div>
    );
}

export default App;
