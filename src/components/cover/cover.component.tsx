import { useTranslation } from "react-i18next";
import memoji from "../../assets/baptie/memoji.png";


const Cover = () =>{
    const {t} = useTranslation();
    return(
        <section id="accueil" className="accueil">
                    <div className="image-container">
                        <img
                            src={memoji}
                            alt="Baptiste PP"
                            className="rounded-image"
                        />
                    </div>
                    <div className="intitulé">
                        <p className="nom">Baptiste CARON</p>
                        <p className="poste">{t('poste')}</p>
                    </div>

                </section>
    )
}

export default Cover;