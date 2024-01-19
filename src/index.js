import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced💪",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced💪",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced💪",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate👍",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced💪",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner👶",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar img="https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?rs=1&pid=ImgDetMain" />
      <div className="data">
        <Intro
          header="kennedy mwangi"
          info="Full_stack software developer but who majorly focuses on the backend of develoment, a student, a passionate football fan and mental health advocate"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.img} alt="neddy" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.info}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      we enter javascript mode and loop over the skills and render it to the
      skill component
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner " && "👶"}
        {level === "advanced " && "💪"}
        {level === "intermdiate " && "👍"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
