import React from 'react';
import "./Education.css";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaUserGraduate } from "react-icons/fa";

const Education = () => {

    const data = [

        {
            name:"NSU",
            degre:"CSE",
            year:"2021",
        },
        {
            name:"NSU",
            degre:"CSE",
            year:"2021",
        },
        {
            name:"NSU",
            degre:"CSE",
            year:"2021",
        },
    ];

    const colors = [
        "#c20a3b",
        "#17789c",
        "#340770"
      ];


  return (
    <div className='container education-section' id=' Education'>

        <div className='section-title'>
            <h5> Education </h5>
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
icon={<FaUserGraduate />}
>
<h3 className="vertical-timeline-element-title">{item.name}</h3>
<h4 className="vertical-timeline-element-subtitle">{item.degre}</h4>


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

export default Education
