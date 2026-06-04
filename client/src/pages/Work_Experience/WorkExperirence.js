import React from "react";
import "./WorkExperience.css";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section className="experience" id="work-experience">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-tag">Professional Journey</span>
          <h1>Work Experience</h1>
          <p>
            Hands-on software development experience building scalable,
            database-driven full-stack applications in an Agile environment.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-left">
            <div className="experience-icon">
              <FaBriefcase />
            </div>

            <div className="experience-company">
              <h2>Miraj Group</h2>
              <p>IT Division</p>
            </div>
          </div>

          <div className="experience-right">
            <div className="experience-top">
              <div>
                <h3>Software Development Engineer Intern</h3>

                <div className="experience-meta">
                  <span>
                    <FaMapMarkerAlt /> Udaipur, India
                  </span>

                  <span>
                    <FaCalendarAlt /> Jun 2025 – Jul 2025
                  </span>
                </div>
              </div>

              <span className="experience-badge">Internship</span>
            </div>

            <div className="experience-tech">
              <span>ASP.NET Core</span>
              <span>Entity Framework</span>
              <span>SQL Server</span>
              <span>Git</span>
              <span>Agile</span>
            </div>

            <div className="experience-points">
              <div className="experience-point">
                <div className="point-icon">
                  <FaCode />
                </div>
                <p>
                  Architected and developed a full-stack Electronic Shop
                  Management System using ASP.NET Core, Entity Framework, and
                  SQL Server, handling 2,000+ daily transactions with optimized
                  database indexing and query performance tuning.
                </p>
              </div>

              <div className="experience-point">
                <div className="point-icon">
                  <FaDatabase />
                </div>
                <p>
                  Designed normalized database schema with 12+ tables,
                  implementing ACID properties, foreign key constraints, and
                  triggers that improved data retrieval speed by 40%.
                </p>
              </div>

              <div className="experience-point">
                <div className="point-icon">
                  <FaUsers />
                </div>
                <p>
                  Collaborated in an Agile development environment with 2-week
                  sprints, utilized Git for version control, and participated in
                  code reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;