import {useTranslation} from "react-i18next";
import '../../styles/associatif.scss';
import amigo_logo from "../../assets/logos/amigo_logo.png";
import jnm_logo from "../../assets/logos/jnm_logo.png";
import mc_logo from "../../assets/logos/mc_logo.png";
import SectionTitleComponent from "../shared/sectionTitle.component";


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
        <section className="associatif">
            <SectionTitleComponent titre={t('associatif')}/>
            <div className="contentSectAsso">

                <div className="contentDivAsso" onClick={goToAmigo}>
                    <div className="imagesAsso" id="amigo" >
                        <img src={amigo_logo} alt="Logo AMIGO" id="amigo"/>
                    </div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">AMIGO</h2>
                        <p className="descAmigo">{t('amigo_desc')}</p>
                    </div>
                </div>

                <div className="contentDivAsso"  onClick={goToJnm}>
                    <div className="imagesAsso" id="jnm">
                        <img src={jnm_logo} alt="Logo JNM 2024" id="jnm"/>
                    </div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">JNM Orléans 2024</h2>
                        <p className="descAmigo">{t('jnm_desc')}</p>
                    </div>
                </div>

                <div className="contentDivAsso"  onClick={goToMC}>
                    <div className="imagesAsso" id="jnm">
                        <img src={mc_logo} alt="Logo MC" id="jnm"/>
                    </div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">MIAGE Connection</h2>
                        <p className="descAmigo">{t('mc_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );

}