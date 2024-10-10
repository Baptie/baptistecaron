import './sectionTitle.component.scss';
interface SectionTitleProps{
    titre?:string;
}
/**
 * Composant de rendu d'un titre de section
 * @param props titre
 * @returns 
 */
const SectionTitleComponent : React.FC<SectionTitleProps> = (props: SectionTitleProps) =>{
    const{titre} = props;
    return(
        <h1 className="sectionTitle">{titre}</h1>
    );
}

export default SectionTitleComponent;
