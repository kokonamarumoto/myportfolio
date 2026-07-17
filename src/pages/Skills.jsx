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

// export const Skills = () => {
//   return (
    
//      <>
//       <h2 className="section-title">Learning Now</h2>
//       <p className=" subtitle">ー学習中の技術ー</p>
          
//      <div className="skills-grid">
//         {skills.map((skill) => (
//           <article className="skill-card" key={skill.name}>
//             <div className="skill-card__icon">{skill.icon}</div>
//             <h3 className="skill-card__name">{skill.name}</h3>
//             <p className="skill-card__stars">
//         {Array.from({ length: 5 }).map((_, index) => (
//             <span key={index}>
//                {index < skill.stars ? "★" : "☆"}
//             </span>
//         ))}
//             </p>
//           </article>
//         ))}
//       </div>
         
//    </>
        
//   );
// };



const skillGroups = [
  {
    category: "Frontend",
    subtitle: "ー画面を作る技術ー",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, stars: 2 },
      { name: "CSS", icon: <FaCss3Alt />, stars: 2 },
      { name: "JavaScript", icon: <FaJsSquare />, stars: 1 },
      { name: "React", icon: <FaReact />, stars: 1 },
      { name: "TypeScript", icon: <SiTypescript />, stars: 1 },
       { name: "Next.js", icon: <SiNextdotjs />, stars: 1 },
    ],
  },
  {
    category: "Backend",
    subtitle: "ー処理を作る技術ー",
    skills: [
      { name: "Python", icon: <FaPython />, stars: 2 },
      { name: "Flask", icon: <SiFlask />, stars: 1 },
      { name: "Django", icon: <SiDjango />, stars: 2 },
    ],
  },
  
];

export const Skills = () => {
  return (
    <>
      <h2 className="section-title">Skills</h2>

      {skillGroups.map((group) => (
        <section key={group.category} className="skill-group">
          <h3 className="skill-group__title">{group.category}</h3>
          <p className="subtitle">{group.subtitle}</p>

          <div className="skills-grid">
            {group.skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card__icon">{skill.icon}</div>
                <h4 className="skill-card__name">{skill.name}</h4>
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
        </section>
      ))}
    </>
  );
};
