import { Skill } from '../categorySkill/categorySkill.component'
import './skill.component.scss'

const SkillComponent : React.FC<Skill> = (prop :Skill) => {
    return(
        <div className="skillContainer">
            <span className="skillName">
                {prop.name}
            </span>
            <span className="skillLevel">
                {prop.level}
            </span>
        </div>
    )
}

export default SkillComponent;