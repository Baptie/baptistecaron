import './sectionTitle.component.scss';
interface SectionTitleProps{
    sub?:string;
    titre?:string;

}
/**
 * Composant de rendu d'un titre de section
 * @param props titre
 * @returns 
 */
const SectionTitleComponent : React.FC<SectionTitleProps> = (props: SectionTitleProps) =>{
    const titre = props.titre;
    const sub = props.sub;
    return(
        <div className="titleContainer">
            <h3 className="sectionSub">{sub}</h3>
            <h1 className="sectionTitle">{titre}</h1>
        </div>
      
    );
}

export default SectionTitleComponent;
