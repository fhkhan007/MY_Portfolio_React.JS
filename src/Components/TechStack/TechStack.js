import React,{useState} from 'react';
import "./TechStack.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export const TechStack = () => {

    const data = [
        {
            name:"Web Developer"
        },
        {
            name:"HTML"
        },
        {
            name:"CSS"
        },
        {
            name:"Boststrap"
        },
        {
            name:"JavaScript"
        },
        {
            name:"React.js"
        },
        {
            name:"Node.js"
        },
        {
            name:"Express"
        },
        {
            name:"Mongoose"
        },
    ]

    const colors = [
        "#f2ecdc", 
        "#05c4b2", 
        "#527d65",
        "#9d8b7c" ,
        "#577c9d",
        "#a6bacb",
        "#5167a3",
        "#577c9d",
        "#a6bacb",
        "#5167a3"
    ]

    const [showMoreTechStack,setShowMoreTechStack] = useState(3);

    const loadMore = ()=>{
        setShowMoreTechStack((prev)=> prev+3);
    }





  return (
    <div className='container techstack-section' id='techstack'>
        
        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span className='line'></span>
        </div>

        <div className='row'>
            {data.slice(0,showMoreTechStack).map((item,index)=>(

                <Fade  right> 
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>

                    <div className={index===0 ? "tech-content-marked tech-content":"tech-content"}>
                        <span className='tech-number' style={{backgroundColor:colors[index]}}>
                            {index+1}
                        </span>
                    <p>{item.name}</p>
                    </div>
                </div>
                </Fade>
            ))}
        </div>

        {showMoreTechStack >= data.length ? null : (
            <Zoom>
            <span className='load-more-tech-stack' onClick={loadMore}>
            Load More
        </span>
        </Zoom>
        )}
        
    </div>
  )
}
