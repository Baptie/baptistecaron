import React, {useEffect} from 'react';
import './styles/App.scss';
import LangageSelector from "./components/LangageSelector";
import {useTranslation} from "react-i18next";

function App() {
    useEffect(() => {
        // Function to handle smooth scrolling
        function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId || '');

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
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

    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <div className="App">

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
                        <p className="nom"> Baptiste CARON</p>
                        <p className="poste">{t('poste')}</p>
                    </div>
                </section>

                <section id="presentation" className="presentation">
                    <div className="illustration">
                        <img src="/to_fill.png" alt="to_fill"/>
                    </div>

                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('a_propos_libelle')}</h1>
                        <p>{t('presentation')}</p>
                    </div>

                </section>

                <section id="etudes" className="etudes">
                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('parcours_scolaire_libelle')}</h1>
                        <ul>
                            <li>
                                <label>{t('univ')}</label>
                                <ul>
                                    <li>{t('licence')}</li>
                                    <li>{t('master')}</li>
                                </ul>
                            </li>

                            <li>{t('bac')}</li>
                        </ul>
                    </div>
                    <div className="illustration">
                        <img src="/to_fill.png" alt="to_fill"/>
                    </div>

                </section>

                <section id="parcoursPro" className="parcoursPro">
                    <div className="illustration">
                        <img src="/to_fill.png" alt="to_fill"/>
                    </div>

                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('experience_pro_libelle')}</h1>
                        <ul>
                            <li>
                                <label>{t('sopra')}</label>
                                <ul>
                                    <li>{t('alt')}</li>
                                    <li>{t('dev')}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="competences" className="competences">
                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('competences_libelle')}</h1>
                        <ul>
                            <li>{t('langagesProg')}</li>
                            <li>{t('frameworkProg')}</li>
                        </ul>
                    </div>
                    <div className="illustration">
                        <img src="/to_fill.png" alt="to_fill"/>
                    </div>

                </section>

                <section id="hobbies" className="hobbies">
                    <div className="illustration">
                        <img src="/to_fill.png" alt="to_fill"/>
                    </div>

                    <div className="texteSection">
                        <h1 className="sectionTitle">{t('hobbies_libelle')}</h1>
                        <ul>
                            <li>{t('volley')}</li>
                            <li>{t('astronomie')}</li>
                            <li>{t('jeux_videos')}</li>
                        </ul>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default App;
