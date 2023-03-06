import React from 'react';
import { About } from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import { TechStack } from './Components/TechStack/TechStack';


const App = () => {
  return (
    <div>

      <Sidebar />
      <About/>
      <TechStack/>
      
    </div>
  )
}

export default App

