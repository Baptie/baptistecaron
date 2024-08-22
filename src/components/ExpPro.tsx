import {useTranslation} from "react-i18next";
import '../styles/ExpPro.scss';
import sopra_logo from "../assets/logos/logo-sopra-blanc.png"

export default function ExperiencePro() {

    function goToSopra(){
        window.open("https://www.soprasteria.com/fr", "_blank");
    }
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <section id="parcoursPro" className="parcoursPro">
            <h1 className="sectionTitle">{t('experience_pro_libelle')}</h1>
            <div className="contentSectAsso">

                <div className="contentDivAsso" onClick={goToSopra}>
                    <div className="imagesAsso" id="amigo" >
                        <img src={sopra_logo} alt="Logo Sopra" id="amigo"/>
                    </div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">Développeur Fullstack</h2>
                        <p className="descAmigo">{t('amigo_desc')}</p>
                    </div>
                </div>

                <div className="contentDivAsso"  onClick={goToSopra}>
                    <div className="imagesAsso" id="jnm">
                        <img src={sopra_logo}  alt="Logo Sopra" id="jnm"/>
                    </div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">Ingénieur d'Études et de Développement</h2>
                        <p className="descAmigo">{t('jnm_desc')}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}