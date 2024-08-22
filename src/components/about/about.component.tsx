import { t } from "i18next";
import SectionTitleComponent from "../shared/sectionTitle.component";


const About = () => {
    return (
        <section id="presentation" className="presentation">
            <SectionTitleComponent titre={t('a_propos_libelle')}/>
            <div className="texte">
                <div className="texteSection">
                    <p>{t('presentation')}</p>
                </div>
            </div>
        </section>
    )
}

export default About;