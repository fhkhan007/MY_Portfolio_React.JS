import React from 'react';
import { About } from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import { TechStack } from './Components/TechStack/TechStack';
import { Project } from './Components/Project/Project';
import WorkExperience from './Components/WorkExperience/WorkExperience';
const App = () => {
  return (
    <div>

      <Sidebar />
      <About/>
      <TechStack/>
      <Project/>
      <WorkExperience />
      
    </div>
  )
}

export default App

