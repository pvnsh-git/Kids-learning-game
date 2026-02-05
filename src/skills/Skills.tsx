import { ISkillProps } from "./Skills.types";

const Skills = ({skills}:ISkillProps) => {
  return (
    <>
    <div>Skills</div>
    <ul>
        {
            skills.length > 0 && skills.map((skill, index) => <li key={skill+index}>{skill}</li>)
        }
    </ul>
    </>
  )
}

export default Skills