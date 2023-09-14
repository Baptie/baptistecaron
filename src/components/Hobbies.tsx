import React from "react";
import {useTranslation} from "react-i18next";
import '../styles/Hobbies.scss'

export default function Hobbies() {
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <section id="hobbies" className="hobbies">
            <div className="texteSection">
                <h1 className="sectionTitle">{t('hobbies_libelle')}</h1>
                <div className="bloc blocHobbie">
                    <p className="hobbieEmoji">🏐</p>
                    <p className="hobbieLibelle">{t('volley')}</p>
                    <div className="hidden-details">{t('description_volley')}</div>
                </div>
                <div className="bloc blocHobbie">
                    <p className={"hobbieEmoji"}>🪐</p>
                    <p className="hobbieLibelle">{t('astronomie')}</p>
                    <div className="hidden-details">{t('description_astro')}</div>
                </div>
                <div className="bloc blocHobbie">
                    <p className={"hobbieEmoji"}>🎮</p>
                    <p className="hobbieLibelle">{t('jeux_videos')}</p>
                    <div className="hidden-details">{t('description_games')}</div>
                </div>
            </div>

        </section>
    );
}