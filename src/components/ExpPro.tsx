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
                            <p className='title'>{t('stage_title')}</p>
                            <p className='descPoste'>{t('stage_desc')}</p>
                        </div>
                    </div>

                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>{t('alt_title')}</p>
                            <p className='descPoste'>{t('alt_desc')}</p>
                        </div>
                    </div>
                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>{t('stage_title')}</p>
                            <p className='descPoste'>{t('stage_desc')}</p>
                        </div>
                    </div>

                    <div className='carousel__item'>
                        <div className='carousel__item-head'>
                            <img src="/sopra.png" alt="sopra" className="carousel_brand_image"/>
                        </div>
                        <div className='carousel__item-body'>
                            <p className='title'>{t('alt_title')}</p>
                            <p className='descPoste'>{t('alt_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}