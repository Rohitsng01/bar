import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const home = () => {
  return (
    <div>
    <div className='home'>
      <div className='h3'>
        <h4> <span>There is No Sincerer</span> Love <span>then the love of Food </span></h4>
        <p>
          "From Farm to table, We curate an epicuren
          advanture that celebrate the essence of taste."</p>
         <p className='pr'>"30 Degree :- Elevating Dining to a Higher Digree." </p>
          <p className='np'> "30 Degree :- Where Falvor Finds it's Perfect Balance."</p>
        
      </div>
      
      <div className='img'>
        <Carousel
        infiniteLoop autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        width={300}
        height={300}
        showThumbs={false} >
        <img src='assets\img\s5.jpg'/>
        <img src='assets\img\s3.jpg'/>
        <img src='assets\img\s2.jpg'/>
        <img src='assets\img\s1.jpg'/>
      </Carousel>
      </div>
      
    </div>
   

    </div>
  )
}

export default home