import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiFlask, SiDjango, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, stars: 2 },
  { name: "CSS", icon: <FaCss3Alt />, stars: 2 },
  { name: "JavaScript", icon: <FaJsSquare />, stars: 1},
  
  { name: "Python", icon: <FaPython />, stars: 2 },
  { name: "Flask", icon: <SiFlask />, stars: 1 },
  { name: "Django", icon: <SiDjango />, stars: 2 },
  { name: "React", icon: <FaReact />, stars: 1 },
  { name: "TypeScript", icon: <SiTypescript />, stars: 1 },
  { name: "Next.js", icon: <SiNextdotjs />, stars: 1 },
  
];

export const Skills = () => {
  return (
    
     <>
      <h2 className="section-title">Learning Now</h2>
      <p className=" subtitle">ー学習中の技術ー</p>
          
     <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-card__icon">{skill.icon}</div>
            <h3 className="skill-card__name">{skill.name}</h3>
            <p className="skill-card__stars">
        {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>
               {index < skill.stars ? "★" : "☆"}
            </span>
        ))}
            </p>
          </article>
        ))}
      </div>
         
   </>
        
  );
};
