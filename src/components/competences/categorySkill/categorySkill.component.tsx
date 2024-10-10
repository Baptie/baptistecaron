import SkillComponent from '../skill/skill.component'
import './categorySkill.component.scss'

export interface Skill{
    name:string,
    level:string
}
interface CategorySkillProp{
    name:string,
    skills:Skill[]
}
const CategorySkill : React.FC<CategorySkillProp> = (prop:CategorySkillProp) =>{
    return(
        <div className="categorySkillContainer">
            <span className="categoryTitle">
                {prop.name}
            </span>
            <div className="allSkillsContainer">
            {prop.skills.map(
                skill =>{
                    return (
                        <SkillComponent 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level}/>
                    )
                }
            )}
            </div>
            
        </div>
    )
}

export default CategorySkill;