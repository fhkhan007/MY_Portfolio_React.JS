import React,{useState} from 'react';
import { FcExpand,FcCollapse } from "react-icons/fc";
import './Project.css'

const ProjectList = ({name,des,projectlink,techused}) => {

  const [show,setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };


  return (

    <div className={show ? "project-list-opend project-list" : "project-list"} onClick={handleShowandCollapse}
    onMouseEnter={() => setShow(true)}
    onMouseLeave={()=> setShow(false)}
    >

      <div className='title-and-collapse-option'>
        <h5>{name}</h5>
        <p> 
          {show ? <FcExpand size={20}/> : <FcCollapse size={20}/>}
        </p>
      </div>

      <div className='description'>
      {show ? <p>{des}</p> : <p>{des.substring(0,150)}...<p style={{color:"black"}}>Read More</p></p>}
      </div>

      <div className='row'>
        {techused && techused.map((tech,index) =>(
          <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>

            <div className='tech-used-in-project'>
              <p>{tech.techname}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='live-demo-button'>
        <a target="_" href={projectlink}> Live Demo </a>

      </div>

    </div>
    
  )
}

export default ProjectList
