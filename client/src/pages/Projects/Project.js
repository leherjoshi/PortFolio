import React, { useState } from "react";
import "./Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaLaptopCode,
  FaJava,
  FaDatabase,
  FaBrain,
  FaServer,
} from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "CodeFlow AI",
    domain: "AI / Cloud / Full Stack",
    icon: <FaRobot />,
    tech: ["Next.js", "TypeScript", "AWS", "DynamoDB", "Bedrock"],
    description:
      "AI-powered LeetCode learning companion that analyzes user profiles, identifies weak topics, and generates personalized learning paths.",
    points: [
      "Built AI mentor using Amazon Bedrock Nova Lite for debugging, explanations, and hints.",
      "Developed serverless backend with AWS Lambda, API Gateway, and DynamoDB.",
      "Implemented JWT authentication with custom Lambda authorizer.",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "CompuNet",
    domain: "Frontend / Web Development",
    icon: <FaLaptopCode />,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive computer website with modern UI, interactive navigation, and structured course sections.",
    points: [
      "Developed clean responsive UI for desktop and mobile devices.",
      "Implemented interactive frontend components using JavaScript.",
      "Improved user accessibility through responsive design.",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Multi-Threaded Banking System",
    domain: "Java / Database / Desktop App",
    icon: <FaJava />,
    tech: ["Java", "MySQL", "JDBC", "Swing", "Multithreading"],
    description:
      "Thread-safe banking system capable of handling concurrent transactions using synchronization mechanisms.",
    points: [
      "Handled concurrent banking transactions safely using multithreading.",
      "Applied OOP principles for modular and maintainable code.",
      "Optimized SQL queries for faster transaction processing.",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Distributed Cache System",
    domain: "System Design / Backend",
    icon: <FaServer />,
    tech: ["Java", "Multithreading", "Networking", "Consistent Hashing"],
    description:
      "Distributed in-memory cache system supporting concurrent read/write operations across multiple nodes.",
    points: [
      "Implemented consistent hashing and virtual nodes for balanced load distribution.",
      "Built LRU and LFU eviction policies with efficient lookup.",
      "Engineered replication and failover for high availability.",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Scalable Healthcare Symptom Predictor",
    domain: "Machine Learning / Healthcare",
    icon: <FaBrain />,
    tech: ["Python", "Scikit-learn", "Flask", "SVM"],
    description:
      "Machine learning based healthcare system for predicting diseases from ambiguous symptom inputs.",
    points: [
      "Built end-to-end ML pipeline for symptom-based disease prediction.",
      "Optimized SVM kernels for low-latency inference.",
      "Deployed model as RESTful Flask microservice.",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Electronic Shop Management System",
    domain: "Full Stack / Database",
    icon: <FaDatabase />,
    tech: ["ASP.NET Core", "SQL Server", "Entity Framework", "MVC"],
    description:
      "Full-stack shop management system for products, stock, sales, invoices, customers, and purchase management.",
    points: [
      "Designed database tables for products, categories, sales, stock, and customers.",
      "Implemented admin dashboard, stock tracking, and invoice management.",
      "Used ASP.NET Core MVC with SQL Server and Entity Framework.",
    ],
    github: "#",
    live: "#",
  },
];

const categories = ["All", ...new Set(projectsData.map((project) => project.domain))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.domain === activeCategory);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">Portfolio Work</span>
          <h1>My Projects</h1>
          <p>
            A collection of projects across AI, cloud, backend systems, machine
            learning, full-stack development, and database-driven applications.
          </p>
        </div>

        <div className="project-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active-tab" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-top">
                <div className="project-icon">{project.icon}</div>
                <span className="project-domain">{project.domain}</span>
              </div>

              <h2>{project.title}</h2>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;