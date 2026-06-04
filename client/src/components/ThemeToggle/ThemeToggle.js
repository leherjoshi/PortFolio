import React from "react";
import "./ThemeToggle.css";
import {FaMoon,FaSun} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle=()=>{
  const {theme,toggleTheme}=useTheme();
  return(
    <button className="theme-toggle"
    onClick={toggleTheme}>
      <span className="theme-icon">
        {theme==="light"?<FaMoon/>:<FaSun/>}
      </span>

      <span className="theme-text">
        {theme==="light"?"Dark Mode":"Light Mode"}
      </span>
      
    </button>
  );
  
};
export default ThemeToggle;