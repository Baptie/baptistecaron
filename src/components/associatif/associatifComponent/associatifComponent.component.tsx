import './associatifComponent.component.scss';
import billard from '../../../assets/asso/amigo_billard.jpeg'
import bruxelles from '../../../assets/asso/amigo_bruxelles.jpeg'
import forum from '../../../assets/asso/amigo_forum.jpeg'
import cracheur from '../../../assets/asso/jnm_cracheur.jpg'
import feu from '../../../assets/asso/jnm_feu.jpg'
import serre from '../../../assets/asso/jnm_serre.jpg'
import bureau  from '../../../assets/asso/mc_bureau.jpeg'
import repas from '../../../assets/asso/mc_repas.jpeg'

interface AssoComponentProp{
    id:string,
    name:string,
    keywords:string[],
    description:string,
    postes:string[],
    images:string[]

}
const AssociatifComponent : React.FC<AssoComponentProp> = (prop:AssoComponentProp) => {
    const opposite = parseInt(prop.id)%2 == 0
 
    return(
        <div className={`experienceAssociatifContainer`}>
            <span className={`id  ${opposite ? "oppositeAlign" :''}`}>
                {prop.id}
            </span>

            <span className={`name  ${opposite ? "oppositeAlign" :''}`}>
                {prop.name}
            </span>
            
            <div className={`keywordsContainer  ${opposite ? "oppositeAlignKeywords" :''}`}>
                {
                    prop.keywords.map(
                        keyword =>{
                            return(
                                <span className={`keywordItem `}>
                                    {keyword}
                                </span>
                            )
                        }
                    )
                }
            </div>

            <span className={`description`}>
                {prop.description}
            </span>
            {
            prop.id === "01" &&
                <div className="imagesAssoContainer">
                    <img src={billard} alt="" className="imageAssoItem" />
                    <img src={bruxelles} alt="" className="imageAssoItem" />
                    <img src={forum} alt="" className="imageAssoItem" />
                </div>
            }
            {
            prop.id === "02" &&
                <div className="imagesAssoContainer">
                    <img src={cracheur} alt="" className="imageAssoItem" />
                    <img src={serre} alt="" className="imageAssoItem" />
                    <img src={feu} alt="" className="imageAssoItem" />
                </div>
            }
            {
            prop.id === "03" &&
                <div className="imagesAssoContainer">
                    <img src={bureau} alt="" className="imageAssoItem" />
                    <img src={repas} alt="" className="imageAssoItem" />
                </div>
            }

        </div>
    )
}

export default AssociatifComponent;