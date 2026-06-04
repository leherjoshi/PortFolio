import React from "react";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaDatabase,
  FaCloud,
  FaCode,
  FaServer,
  FaBug,
  FaProjectDiagram,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";

const TechstackList = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <FaCode /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C#", icon: <FaCode /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <FaCode /> },
    ],
  },
  {
    id: 2,
    category: "Backend & APIs",
    skills: [
      { name: "REST APIs", icon: <FaNetworkWired /> },
      { name: "Microservices", icon: <FaProjectDiagram /> },
      { name: "ASP.NET Core", icon: <FaServer /> },
      { name: "Entity Framework", icon: <FaDatabase /> },
      { name: "Flask", icon: <FaPython /> },
      { name: "AWS Lambda", icon: <FaCloud /> },
      { name: "API Gateway", icon: <FaNetworkWired /> },
    ],
  },
  {
    id: 3,
    category: "Frontend & Web",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Next.js", icon: <FaReact /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    id: 4,
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "DynamoDB", icon: <FaDatabase /> },
    ],
  },
  {
    id: 5,
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: <FaCloud /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Docker Basics", icon: <FaDocker /> },
      { name: "Vercel", icon: <FaCloud /> },
      { name: "Postman", icon: <FaTools /> },
    ],
  },
  {
    id: 6,
    category: "Core Competencies",
    skills: [
      { name: "DSA", icon: <FaProjectDiagram /> },
      { name: "OOP", icon: <FaCode /> },
      { name: "System Design", icon: <FaProjectDiagram /> },
      { name: "Database Design", icon: <FaDatabase /> },
      { name: "Problem Solving", icon: <FaTools /> },
      { name: "Debugging", icon: <FaBug /> },
      { name: "Agile/Scrum", icon: <FaProjectDiagram /> },
    ],
  },
];

export default TechstackList;