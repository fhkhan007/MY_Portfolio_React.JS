import React from 'react';
import "./Project.css";
import ProjectList from './ProjectList';


export const Project = () => {

  const data = [
    {
      name:"Portfolio",
      des:"This is my Portfolio using by React.js",
      projectlink:" ",
      techused: [
        {
          techname:"Node.js"
        },
        {
          techname:"javaScript"
        },
        {
          techname:"HTML"
        },
        {
          techname:"CSS"
        },
        {
          techname:"React>js"
        },
      ]
    },

    {
      name:"Portfolio",
      des:"This is my Portfolio using by React.js",
      project:" ",
      techused: [
        {
          techname:"Node.js"
        },
        {
          techname:"javaScript"
        },
        {
          techname:"HTML"
        },
        {
          techname:"CSS"
        },
        {
          techname:"React>js"
        },
      ]
    },
  ]



  return (
    <div className='container' id='Projects'>
        
        <div className='section-title'>
            <h5>Project</h5>
            <span className='line'></span>
        </div>

        <div className='row'>

          {data.map((item,index) => (
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>

              <ProjectList {...item} />

            </div>
          ))}
        </div>
    </div>
  )
}
