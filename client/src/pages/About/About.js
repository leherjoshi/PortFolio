import React from "react";
import "./About.css";
import photo from "../../assets/Images/IMG_3173.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={photo} alt="Leher Joshi" />
        </div>

        <div className="about-content">
          <h1>About Me</h1>

          <p>
            Hi, I'm <span>Leher Joshi</span>, a Computer & Communication
            Engineering student at LNMIIT Jaipur, Batch of 2027. I'm passionate
            about Full-Stack Development, Data Structures & Algorithms, and
            Machine Learning.
          </p>

          <p>
            I enjoy building real-world projects, exploring new technologies,
            and solving challenging problems. Beyond coding, I actively
            participate in college events, clubs, and fests, where I've
            developed leadership, teamwork, and communication skills.
          </p>

          <p>
            When I'm not coding, you'll find me dancing, acting, learning
            something new, or contributing to exciting campus activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;