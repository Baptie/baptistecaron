import React from "react";
import {useTranslation} from "react-i18next";
import '../../styles/school.scss'
import SectionTitleComponent from "../shared/sectionTitle.component";

export default function School() {
    /* Fonction d'appel aux bases de langages */
    const {t} = useTranslation();

    function slideDown(text: string) {
        const details = document.querySelectorAll(".event-details");
        details.forEach((item, index) => {
            if (item.id === text) {
                console.log("in")
                item.classList.add("detailsActive")
            }
        })
    }

    function remove() {
        const details = document.querySelectorAll(".event-details");
        details.forEach((item, key) => {
            console.log("out")
            item.classList.remove("detailsActive")
        })
    }


    return (
        <section id="etudes" className="etudes">
            <SectionTitleComponent titre={t('parcours_scolaire_libelle')}/>
            <div className="timeline">
                <div className="dateBlock">
                    <div className="date">2018</div>
                    <div className="date">2022</div>
                    <div className="date">2024</div>
                </div>

                <div className="timelineBlock">
                    <div className="traitBefore "></div>
                    <div className="event-circle "
                         onMouseEnter={$event => slideDown("bac")}
                         onMouseLeave={$event => remove()}
                    ></div>
                    <div className="trait "></div>
                    <div className="event-circle"
                         onMouseEnter={$event => slideDown("licence")}
                         onMouseLeave={$event => remove()}
                    ></div>
                    <div className="trait "></div>
                    <div className="event-circle "
                         onMouseEnter={$event => slideDown("master")}
                         onMouseLeave={$event => remove()}
                    ></div>
                    <div className="traitAfter"></div>
                </div>

                <div className="detailsBlock">
                    <div className="event-details" id="bac">
                        <h3>{t('bac')}</h3>
                        <p>{t('bac_details')}</p>
                    </div>
                    <div className="event-details" id="licence">
                        <h3>{t('licence')}</h3>
                        <p>{t('licence_details')}</p>
                    </div>
                    <div className="event-details" id="master">
                        <h3>{t('master')}</h3>
                        <p>{t('master_details')}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}