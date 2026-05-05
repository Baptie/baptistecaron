import { t } from "i18next";
import SectionTitleComponent from "../shared/sectionTitle/sectionTitle.component";
import "./about.component.scss";
import photoBaptie from "../../assets/baptie/baptie-volley.jpg";
import Carousel from "../shared/carousel/carousel.component";
import angular from "../../assets/techs/angular.png";
import react from "../../assets/techs/react.png";
import java from "../../assets/techs/java.png";
import html from "../../assets/techs/html.png";
import css from "../../assets/techs/css.png";
import spring from "../../assets/techs/spring.png";
import notion from "../../assets/techs/notion.png";
import office from "../../assets/techs/office.png";
import jira from "../../assets/techs/jira.png";
import confluence from "../../assets/techs/confluence.png";

const About = () => {
  return (
    <section id="presentation" className="presentation">
      <SectionTitleComponent titre={t("a_propos_libelle")} />
      <div className="presentationContent">
        <div className="profilPictureContainer">
          <img src={photoBaptie} alt="" className="profilPicture" />
        </div>
        <div className="texteSection">
          <p>{t("presentation")}</p>
        </div>
      </div>
      <Carousel
        images={[
          react,
          java,
          html,
          css,
          spring,
          notion,
          office,
          jira,
          confluence,
        ]}
      />
    </section>
  );
};

export default About;
