import React from 'react';
import  "./WorkExperience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {

  const data = [
    {
      companyname: " ",
      position:"Web Developer ",
      des:" ",
      year:"2021-2023",
      techskill: [
        {
          techname:"Node.js"
        },
        {
          techname:"React.js"
        },
        {
          techname:"Express.js"
        },
      ],
    },

    {
      companyname: " ",
      position:" ",
      des:" ",
      year:" ",
      techskill: [
        {
          techname:"Node.js"
        },
        {
          techname:"React.js"
        },
        {
          techname:"Express.js"
        },
      ],
    },

    {
      companyname: " ",
      position:" ",
      des:" ",
      year:" ",
      techskill: [
        {
          techname:"Node.js"
        },
        {
          techname:"React.js"
        },
        {
          techname:"Express.js"
        },
      ],
    },
  ];

  const colors = [
    "#c20a3b",
    "#17789c",
    "#340770"
  ]


  return (
    <div className='container workexperience-section' id='workexperience'>
      <div className='section-title'>
            <h5>Work Experience</h5>
            <span className='line'></span>
      </div>

      <div className='timeline-section'>
        <VerticalTimeline lineColor="#340770">

    {data.map((item,index) => (
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: colors[index], color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
date={item.year}
dateClassName="date-class"
iconStyle={{ background: colors[index], color: '#fff' }}
icon={<MdGroupWork />}
>
<h3 className="vertical-timeline-element-title">{item.companyname}</h3>
<h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

<div className='row'>

  {item.techskill.map((tec,index) =>(
    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
      <div className='tech-skills'>
        <p>{tec.techname}</p>
      </div>
  </div>
  ))}
</div>


<p>
 {item.des}
</p>
</VerticalTimelineElement>
    ))}
       </VerticalTimeline>
      </div>

    </div>
  )
}

export default WorkExperience
