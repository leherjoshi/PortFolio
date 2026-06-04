import React from "react";
import "./Techstack.css";
import TechstackList from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <section className="techstack" id="tech-stack">
      <div className="techstack-container">
        <div className="techstack-header">
          <span className="section-tag">Technical Skills</span>
          <h1>Tech Stack</h1>
          <p>
            A structured overview of the programming languages, frameworks,
            databases, cloud platforms, and core engineering skills I work with.
          </p>
        </div>

        <div className="tech-category-wrapper">
          {TechstackList.map((section) => (
            <div className="tech-category-card" key={section.id}>
              <h2>{section.category}</h2>

              <div className="tech-skills">
                {section.skills.map((skill, index) => (
                  <div className="tech-pill" key={index}>
                    <span className="tech-icon">{skill.icon}</span>
                    <span className="tech-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;