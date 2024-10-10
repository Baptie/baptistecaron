import {useTranslation} from "react-i18next";
import './associatif.component.scss';
import SectionTitleComponent from "../shared/sectionTitle.component";
import asso from '../../data/asso.json'
import AssociatifComponent from "./associatifComponent/associatifComponent.component";

export default function  Associatif(){
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