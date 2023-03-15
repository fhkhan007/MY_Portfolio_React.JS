import React, {useState,createContext} from 'react';
import { About } from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import { TechStack } from './Components/TechStack/TechStack';
import { Project } from './Components/Project/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import NavbarMobileView from './Components/Sidebar/NavbarMobileView';
import "./App.css";
import ScrollToTop from "react-scroll-to-top";

export const ThemeContext = createContext(null);

const App = () => {

  const[theme,setTheme] = useState("light");

  const changeTheme = ()=>{
    setTheme((prev) => (prev === "light" ? "dark":"light"));
  }


  return (
    
     <ThemeContext.Provider value={{theme,changeTheme}}>

      <div id={theme}>
      <NavbarMobileView changeTheme={changeTheme} theme={theme}/>

      <Sidebar  changeTheme={changeTheme} theme={theme}/>
      
      <About/>
      <TechStack/>
      <Project/>
      <WorkExperience />
      <Education />
      <Testimonial />
      <Contact />

      </div>

      <ScrollToTop smooth 
      top='600'
      color='white'
      height='20'
      width='20'
      style={{borderRadius:"90px",       backgroundColor:"blueviolet"}}/>

    </ThemeContext.Provider>
  )
}

export default App

