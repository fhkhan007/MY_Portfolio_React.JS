import React from 'react';
import "./About.css";
import AboutImage from"../../Image/F2.jpg";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export const About = () => {
  return (
    <div className='container about-section' id="about">
        <div className='row'>

            <Fade bottom>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={AboutImage} alt="AboutImage"/>
                </div>
            </div>
            </Fade>


            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-details'>

                    <Flip left>
                    <div className='About-title'>
                        <h5> About Me</h5>
                        <span className='line'></span>
                    </div>
                    </Flip>

                    <Fade bottom>
                    <p>
                    A web developer with a strong
                    interest in projects that require
                    both conceptual and analytical
                    thinking. I'm always eager to
                    learn from anyone and
                    everyone.
                    </p>
                    </Fade>
                </div>
            </div>
        </div>

    
    </div>
  )
}
