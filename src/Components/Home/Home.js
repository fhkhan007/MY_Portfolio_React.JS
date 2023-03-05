import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyCV from './CV.pdf';


export const Home = () => {
  return (
    <div className='container-fluid home'>

        <div className='container home-content'>

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

        </div>

    </div>
  )
}
