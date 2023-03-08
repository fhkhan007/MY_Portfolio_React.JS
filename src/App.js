import React from 'react';
import { About } from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import { TechStack } from './Components/TechStack/TechStack';
import { Project } from './Components/Project/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Education from './Components/Education/Education';



const App = () => {
  return (
    <div>

      <Sidebar />
      <About/>
      <TechStack/>
      <Project/>
      <WorkExperience />
      <Education />
      
    </div>
  )
}

export default App

