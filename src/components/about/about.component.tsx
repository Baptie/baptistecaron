import { t } from "i18next";
import SectionTitleComponent from "../shared/sectionTitle.component";
import './about.component.scss';
import volleyNoBg from '../../assets/baptie/volleyball-pic-removebg-preview.png'
import hat from '../../assets/navbar/graduation-cap.png';

const About = () => {
    return (
        <section id="presentation" className="presentation">
            <SectionTitleComponent titre={t('a_propos_libelle')}/>
            <div className="presentationContent">
                <div className="diplomeContainer">
                    <img src={hat} alt="" className="iconDiplome" />
                    <span className="labelDiplome">
                        {
                            t('master')
                        }
                    </span>
                </div>
                <div className="texteSection">
                    <p>{t('presentation')}</p>
                </div>
                <img src={volleyNoBg} alt="" className="volleyAsset" />
            </div>
        </section>
    )
}

export default About;