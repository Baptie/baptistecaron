import './experience.component.scss';

interface ExperienceComponentProp{
    id:string,
    name:string,
    keywords:string[],
    description:string[],
    date:string

}
const ExperienceComponent : React.FC<ExperienceComponentProp> = (prop:ExperienceComponentProp) => {

    return(
        <div className={`experienceContainer`}>
              <span className={`nameExpPro`}>
                {prop.name}
            </span>
            <span className={`dateExpPro`}>
                {prop.date}
            </span>
            <div className={`keywordsContainerExpPro`}>
                {
                    prop.keywords.map(
                        keyword =>{
                            return(
                                <span className={`keywordItemExpPro `} 
                                key={keyword}>
                                    {keyword}
                                </span>
                            )
                        }
                    )
                }
            </div>

            <ul className={`descriptionExpPro`}>
                {
                prop.description.map(
                    item => {
                        return(
                            <li className="descriptionExpProItem"
                            key={item}>
                                {item}
                            </li>
                        )
                    }
                )
                
                }
            </ul>
        </div>
    )
}

export default ExperienceComponent;