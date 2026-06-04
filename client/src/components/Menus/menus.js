import React, { useState } from "react";
import "./menus.css";

import { FaHome, FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";

import { IoMail } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import Zoom from "react-reveal/Zoom";
const navItems = [
  {
    icon: <FaHome color="#ff6b6b" />,
    label: "Home",
    link: "home",
  },
  {
    icon: <FaUserGraduate color="#4dabf7" />,
    label: "About",
    link: "about",
  },
  {
    icon: <GiSkills color="#fcc419" />,
    label: "Education",
    link: "education",
  },
  {
    icon: <MdWork color="#51cf66" />,
    label: "Work Experience",
    link: "work-experience",
  },
  {
    icon: <HiCode color="#f783ac" />,
    label: "Tech Stack",
    link: "tech-stack",
  },
  
  {
    icon: <AiFillProject color="#9775fa" />,
    label: "Projects",
    link: "projects",
  },
  
  {
    icon: <IoMail color="#845ef7" />,
    label: "Contact",
    link: "contact",
  },
];

const Menus = ({ toggle }) => {
  const [active, setActive] = useState("Home");

  return (
    
    <aside className={`sidebar ${!toggle ? "collapsed" : ""}`}>
      <div className="profile-section">
        <Zoom>
        <div className="avatar-wrap">
          <img src="/IMG_9230.JPG" alt="Leher Joshi" />
        </div>
</Zoom>
        {toggle && (
          <div className="profile-info">
            <h3>Leher Joshi</h3>
            <p>Full Stack Developer</p>
          </div>
        )}
      </div>

      <div className="divider"></div>

      <nav className="menu-list">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.link}`}
            className={`menu-item ${active === item.label ? "active" : ""}`}
            onClick={() => setActive(item.label)}
          >
            <span className="menu-icon">{item.icon}</span>

            {toggle && <span className="menu-label">{item.label}</span>}
          </a>
        ))}
      </nav>

      {toggle && <div className="sidebar-footer">© 2026</div>}
    </aside>
  );
};

export default Menus;