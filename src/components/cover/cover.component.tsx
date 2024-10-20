import memoji from "../../assets/baptie/memoji.png";
import './cover.component.scss';
import postes from '../../data/postes.json'

const Cover = () =>{
    return(
        <section id="accueil" className="accueil">
                    <div className="image-container">
                        <div className="imgSizeContainer">
                        <img
                            src={memoji}
                            alt="Baptiste PP"
                            className="rounded-image"
                        />
                        </div>

                    </div>
                    <div className="intitule">
                        <div className="nom">Baptiste CARON</div>
                        <p className="poste">
                            {
                                postes.postes.map(
                                    poste =>{
                                        return(
                                            <span className="posteSpan" key={poste}>
                                                {poste}
                                            </span>
                                        )
                                    }
                                )
                            }
                           
                        </p>
                    </div>

        </section>
    )
}

export default Cover;