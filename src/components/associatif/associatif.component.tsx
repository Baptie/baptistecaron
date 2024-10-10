import {useTranslation} from "react-i18next";
import './associatif.component.scss';
import amigo_logo from "../../assets/logos/amigo_logo.png";
import jnm_logo from "../../assets/logos/jnm_logo.png";
import mc_logo from "../../assets/logos/mc_logo.png";
import SectionTitleComponent from "../shared/sectionTitle.component";
import asso from '../../data/asso.json'
import AssociatifComponent from "./associatifComponent/associatifComponent.component";

export default function  Associatif(){
    function goToAmigo(){
        window.open("https://www.linkedin.com/company/amigo-orleans-miage/", "_blank");
    }
    function goToJnm(){
        window.open("https://www.linkedin.com/company/jnm-2024/", "_blank");
    }
    function goToMC(){
        window.open("https://www.linkedin.com/company/miageconnection/", "_blank");
    }
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return(
        <section className="associatif" id="associatif">
            <SectionTitleComponent titre={t('associatif')}/>
            {
                asso.assos.map(
                    asso => {
                        return(
                            <AssociatifComponent
                            key={asso.id}
                            id={asso.id}
                            name={asso.name}
                            description={asso.description}
                            postes={asso.postes}
                            keywords={asso.keywords}
                            images={asso.images}
                            />
                        )
                    }
                )
            }
            
        </section>
    );

}