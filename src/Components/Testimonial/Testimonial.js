import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {

    const data = [
        {
            name:" ",
            position:" ",
            des:" ",
            img:" "
        },
        {
            name:" ",
            position:" ",
            des:" ",
            img:" "
        },
        {
            name:" ",
            position:" ",
            des:" ",
            img:" "
        },
        {
            name:" ",
            position:" ",
            des:" ",
            img:" "
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        autoplay:true,
        rows: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='container testimonial-section'>

        <div className='section-title'>
            <h5>Testimonial</h5>
            <span className='line'></span>
        </div>

        <div className='testimonial-slider'>

            <Slider {...settings}>
                {data.map((item,index) => (

                    <div className='content-slider-main'>
                      <div className='content-slider' key={index}>

                      <img src={item.img} alt="testimonial imgae" className='center-image' />
                      <p>{item.name}</p>
                      <p>{item.position}</p>
                      <p>{item.des}</p>
                      

                      </div>
                    </div>
                ))}

            </Slider>

        </div>
      
    </div>
  )
}

export default Testimonial
