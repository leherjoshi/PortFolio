import React, { useState } from "react";
import "./Layout.css";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Menus from "../Menus/menus";
import Projects from "../../pages/Projects/Project";
import { MdDoubleArrow } from "react-icons/md";
import { TiArrowRepeatOutline } from "react-icons/ti";
import Techstack from "../../pages/Techstack/Techstack";
import WorkExperience from "../../pages/Work_Experience/WorkExperirence";
import Education from "../../pages/Education/Education";
import Contact from "../../pages/Contact/Contact";
import BackToTop from "../BackToTop/BackToTop";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Layout = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="layout">
      <Menus toggle={toggle} />

      <div className="sidebar-toggle">
        <div
          className="sidebar-toggle-icon"
          onClick={() => setToggle(!toggle)}
        >
          <p>{toggle ? <MdDoubleArrow /> : <TiArrowRepeatOutline />}</p>
        </div>
      </div>

      <main className="main-content">
        <Home />
        <About />
        <Education />
        <WorkExperience/>
        <Techstack />
        <Projects />
        <Contact/>

      </main>
      {/* <ThemeToggle /> */}

      <BackToTop />
    </div>
  );
};

export default Layout;