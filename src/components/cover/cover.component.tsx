import './cover.component.scss';
import portrait from "../../assets/baptie/portrait-illu.png"

const Cover = () =>{
    return(
        <section id="accueil" className="accueil">
                  
                  <div className="verticalContainer">
                    <div className="job">Chef de Projet</div>
                    <div className="line"></div>
                    <div className="date">{new Date().getFullYear()}</div>
                  </div>
                    <div className="intitule">
                        <div className="nomPrenom">
                            <div className="prenom">Baptiste</div>
                            <div className="nom">Caron</div>
                        </div>
                        <div className="baseline">Piloter vos projets complexes, structurer votre croissance opérationnelle.</div>
                       
                    </div>
                    <div className="image-container">
                        <div className="imgSizeContainer">
                        <img
                            src={portrait}
                            alt="Baptiste PP"
                            className="rounded-image"
                        />
                        </div>

                    </div>

        </section>
    )
}

export default Cover;