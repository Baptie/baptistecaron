import {useTranslation} from "react-i18next";
import SectionTitleComponent from "../shared/sectionTitle.component";
import './experiencesProfessionnelles.component.scss';
import experiences from '../../data/experiences.json'
import ExperienceComponent from "./experience/experience.component";
import work from '../../assets/baptie/Working-rafiki.png'
export default function ExperiencePro() {

    function goToSopra(){
        window.open("https://www.soprasteria.com/fr", "_blank");
    }
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <section id="parcoursPro" className="parcoursPro">
            <SectionTitleComponent titre={t('experience_pro_libelle')}/>
            <div className="expProContainer">
                {
                    experiences.experiences.map(
                        experience => {
                            return(
                                <ExperienceComponent
                                key={experience.id}
                                id={experience.id}
                                description={experience.description}
                                keywords={experience.keywords}
                                name={experience.name}
                                date={experience.date}
                                />
                            )
                        }
                    )
                    
                }
            </div>
            <div className="workAssetContainer">
                <img src={work} alt="" className="workAsset" />
            </div>
            

        </section>
    );
}