import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyCV from './CV.pdf';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';


export const Home = ({theme,changeTheme}) => {
  return (
    <div className='container-fluid home' id="home">

      <div className='theme-change' onClick={changeTheme}>

        {theme === "light" ? (<p><BsFillMoonStarsFill size={40}/></p>) : (<p className='sun-theme-icon'><BsFillSunFill size={40}/></p>)}

      </div>

        <div className='container home-content'>

          <Fade right>
            <h1>I am a</h1>
            <h3>
            <Typewriter
              options={{
              strings: ['Web developer', 'MERN Stack'],
              autoStart: true,
              loop: true,
             
              }}
             />
            </h3>
          </Fade>

          <Fade bottom>
            <div className='button-for-action'>

              <div className='hire-me-button'>
                Hire Me
              </div>
              <div className='get-resume-button'>
                <a href={MyCV} download="Fahad_CV">
                Get Resume
                </a>
              </div>
            </div>
          </Fade>

        </div>

    </div>
  )
}
