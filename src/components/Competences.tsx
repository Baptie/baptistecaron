import '../styles/Competences.scss'
import React from "react";
import {useTranslation} from "react-i18next";

export default function Competences() {
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();
    return (
        <section id="competences" className="competences">
            <div className="texteSection">
                <h1 className="sectionTitle">{t('competences_libelle')}</h1>
                <div className="containerCompetences">
                    <div className="blocCompetence java">
                        <img src="/techs/java.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence sql">
                        <img src="/techs/sql.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence mongo">
                        <img src="/techs/mongodb.webp" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence html">
                        <img src="/techs/html.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence css">
                        <img src="/techs/css.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence python">
                        <img src="/techs/python.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence spring">
                        <img src="/techs/spring.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence angular">
                        <img src="/techs/angular.svg" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence react">
                        <img src="/techs/react.png" alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence azure">
                        <img src="/techs/azure.png" alt="" className="logoTechno"/>
                    </div>
                </div>

            </div>
        </section>
    );
}