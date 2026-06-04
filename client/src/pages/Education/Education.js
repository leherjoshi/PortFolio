import React, { useState } from "react";
import "./Education.css";

import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    year: "2023 - 2027",
    institute: "The LNM Institute of Information Technology",
    location: "Jaipur, India",
    course: "B.Tech in Computer and Communication Engineering",
    short: "Currently pursuing engineering with a focus on programming, systems, databases, and problem solving.",
    details: [
      "Current CGPA: 7.88",
      "3rd Year CGPA: 7.88",
      "2nd Year CGPA: 7.64",
      "1st Year CGPA: 8.01",
    ],
  },
  {
    id: 2,
    icon: <FaSchool />,
    year: "2022",
    institute: "Shree Jee Senior Secondary School",
    location: "India",
    course: "Class XII - RBSE",
    short: "Completed senior secondary education with excellent academic performance.",
    details: ["Percentage: 94.8%", "Board: RBSE", "Rank: 1st in school", "Rank: 1st in district"," Priyadarshini Award for Academic Excellence"],
  },
  {
    id: 3,
    icon: <FaSchool />,
    year: "2020",
    institute: "Shree Jee Senior Secondary School",
    location: "India",
    course: "Class X - RBSE",
    short: "Built strong academic foundation during secondary education.",
    details: ["Percentage: 94.17%", "Board: RBSE", "Rank: 3rd in school"," Rank: 10th in district"],
  },
];

const Education = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-header">
          <span className="section-tag">Academic Journey</span>
          <h1>Education</h1>
          <p>
            My academic background, achievements, and learning journey in
            computer engineering and foundational education.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item) => (
            <div
              className={`education-item ${
                activeId === item.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() =>
                setActiveId(activeId === item.id ? null : item.id)
              }
            >
              <div className="education-dot">
                <span>{item.icon}</span>
              </div>

              <div className="education-card">
                <div className="education-card-top">
                  <div>
                    <span className="education-year">
                      <FaCalendarAlt /> {item.year}
                    </span>

                    <h2>{item.institute}</h2>
                    <h3>{item.course}</h3>

                    <p className="education-location">
                      <FaMapMarkerAlt /> {item.location}
                    </p>
                  </div>

                  <button className="expand-btn">
                    <FaChevronDown />
                  </button>
                </div>

                <p className="education-short">{item.short}</p>

                <div className="education-details">
                  {item.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="education-note">
          Click on any education card to expand or collapse details.
        </p>
      </div>
    </section>
  );
};

export default Education;