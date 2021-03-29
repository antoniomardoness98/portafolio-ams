import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './Slides'
import './Slider.css'


const Slider = () => {
  return (
    <div className='carousel-container' id='conocimientos' >
      <div className="carousel-title">
        <h2> <b>Mis conocimientos</b> </h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={335}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 2,
            arrows: false,
            itemWidth: 250,
          }
        }}
      />

    </div>
  )
}

export default Slider


//nota para crear este slider ocupamos un paquete muy popular el cual es: yarn add @brainhubeu/react-carousel