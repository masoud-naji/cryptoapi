import SkillsArray from "./SkillsArray.json";
import "../Styles/progressbar.css";

const skills = () => {
  const CreateSkills = (skill, index) => {
    return (
      <div
        key={index}
        className="MyProgress"
        style={{
          overflow: "hidden",
          height: "0.8rem",
          margin: "0.1rem",
          width: "100%",
          borderRadius: "0.3rem",
        }}
      >
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${skill.skillPercentage}%`,
            overflow: "hidden",
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            padding: "0rem",
            margin: "0rem",
            fontWeight: "bold",
            borderRadius: "0.3rem",
          }}
        >
          <p style={{ marginTop: "-4px" }}>
            {skill.skillName} {skill.skillPercentage}%
          </p>
        </div>
      </div>
    );
  };
  return <div>{SkillsArray.map(CreateSkills)}</div>;
};

export default skills;
