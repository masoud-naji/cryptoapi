import { DevSkillsArray } from "./SkillsArray";
import "../Styles/progressbar.css";

const skills = () => {
  const CreateSkills = (skill, index) => {
    return (
      <div
        key={index}
        className="MyProgress"
        style={{
          overflow: "hidden",
          height: "1rem",
            margin: "0.2rem",
          width: "100%",
        }}
        >
        <div
          className="progress-done"
          style={{
              opacity: 1,
              width: `${skill.skillPercantage}%`,
              overflow: "hidden",
              display: "grid",
              alignContent: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              padding: "0rem",
              margin: "0rem",
              fontWeight: "bold",
          }}
        >
          
            {skill.skillName}  {skill.skillPercantage}%
         
        </div>
      </div>
    );
  };
  return <div>{DevSkillsArray.map(CreateSkills)}</div>;
};

export default skills;
