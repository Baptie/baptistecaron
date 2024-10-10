import React from "react";
import {useTranslation} from "react-i18next";
import SectionTitleComponent from '../shared/sectionTitle.component';
import './competences.component.scss'
import CategorySkill from './categorySkill/categorySkill.component';
import skills from '../../data/skills.json'
export default function Competences() {
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();
    return (
        <section id="competences" className="competences">
            <div className="texteSection">
                <SectionTitleComponent titre={t('competences_libelle')}/>
                <div className="categoriesContainer">
                    {
                        skills.categories.map(
                            categorie => {
                                return (
                                    <CategorySkill 
                                    key={categorie.name}
                                    name={categorie.name  || ''} 
                                    skills={categorie.skills || []} />
                                )
                            }
                        )
                    }
                </div>


               

            </div>
        </section>
    );
}