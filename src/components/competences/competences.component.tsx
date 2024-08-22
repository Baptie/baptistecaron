import '../../styles/competences.scss'
import React from "react";
import {useTranslation} from "react-i18next";
import java from "../../assets/techs/java.png"
import sql from "../../assets/techs/sql.png" 
import mongo from "../../assets/techs/mongodb.webp" 
import html from "../../assets/techs/html.png" 
import css from "../../assets/techs/css.png" 
import python from "../../assets/techs/python.png" 
import spring from "../../assets/techs/spring.png" 
import angular from "../../assets/techs/angular.png" 
import react from "../../assets/techs/react.png" 
import azure from "../../assets/techs/azure.png" 
import SectionTitleComponent from '../shared/sectionTitle.component';

export default function Competences() {
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();
    return (
        <section id="competences" className="competences">
            <div className="texteSection">
                <SectionTitleComponent titre={t('competences_libelle')}/>
                <div className="containerCompetences">
                    <div className="blocCompetence java">
                        <img src={java} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence sql">
                        <img src={sql} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence mongo">
                        <img src= {mongo} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence html">
                        <img src={html} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence css">
                        <img src={css} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence python">
                        <img src={python} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence spring">
                        <img src={spring} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence angular">
                        <img src={angular} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence react">
                        <img src={react} alt="" className="logoTechno"/>
                    </div>
                    <div className="blocCompetence azure">
                        <img src={azure} alt="" className="logoTechno"/>
                    </div>
                </div>

            </div>
        </section>
    );
}