import {useTranslation} from "react-i18next";
import '../styles/Associatif.scss';

export default function  Associatif(){
    function goToAmigo(){
        window.open("https://www.linkedin.com/company/amigo-orleans-miage/", "_blank");
    }
    function goToJnm(){

    }
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return(
        <section className="associatif">
            <h1 className="sectionTitle">{t('associatif')}</h1>
            <div className="contentSectAsso">

                <div className="contentDivAsso">
                    <div className="imagesAsso" id="amigo" onClick={goToAmigo}></div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">AMIGO</h2>
                        <p className="descAmigo">{t('amigo_desc')}</p>
                    </div>
                </div>

                <div className="contentDivAsso">
                    <div className="imagesAsso" id="jnm" onClick={goToJnm}></div>
                    <div className="descAssoBloc">
                        <h2 className="titleDescAsso">JNM Orléans 2024</h2>
                        <p className="descAmigo">{t('jnm_desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );

}