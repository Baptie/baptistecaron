import {useTranslation} from "react-i18next";
import '../styles/ExpPro.scss';

export default function ExperiencePro() {

    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    return (
        <section id="parcoursPro" className="parcoursPro">
            <h1 className="sectionTitle">{t('experience_pro_libelle')}</h1>

            <div className='wrapper'>
                <div className='carousel'>

                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Développeur Fullstack</p>
                            <p>Stage de fin de cursus - L3 MIAGE</p>
                        </div>
                    </div>

                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Apprenti Ingénieur d'Études</p>
                            <p>Alternance 2 ans - MASTER MIAGE</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Développeur Fullstack</p>
                            <p>Stage de fin de cursus - L3 MIAGE</p>
                        </div>
                    </div>

                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>Apprenti Ingénieur d'Études</p>
                            <p>Alternance 2 ans - MASTER MIAGE</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}