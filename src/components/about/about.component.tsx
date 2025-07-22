import { t } from "i18next";
import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import './about.component.scss';
import volleyNoBg from '../../assets/baptie/volleyball-pic-removebg-preview.png';
import mallet from '../../assets/icons/mallet-icon.png';

const About = () => {
    return (
        <section id="presentation" className="presentation">
            <SectionTitleComponent titre={t('a_propos_libelle')}/>
            <div className="presentationContent">
                <div className="diplomeContainer">
                    <img src={mallet} alt="" className="iconCurrentJob" />
                    <span className="labelCurrentJob">
                        {
                            t('current_job')
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