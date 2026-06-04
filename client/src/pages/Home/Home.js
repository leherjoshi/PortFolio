import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="home-box">
          <h1>Hii I'm a</h1>

          <h2>
            <Typewriter
              options={{
                strings: [

                  "Software Developer Engineer!",
                  "Full Stack Developer!",
                  "Machine Learning Enthusiast!",
                  "Final Year Communication and Computer Student!",               
                  "Tech Enthusiast!", 
                  "Problem Solver!",
                  "Passionate Coder!",
                  "Lifelong Learner!",
                  "Creative Thinker!",
                  "Team Player!",
                  "Innovator!",
                  "Tech Explorer!",
                    
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="home-buttons">
            <a href="#contact" className="home-btn">
              Get In Touch
            </a>

            <a
              className="home-btn-outline"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>

            <a
              className="home-btn-outline"
              href="/resume.pdf"
              download="Lahar_Joshi_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;