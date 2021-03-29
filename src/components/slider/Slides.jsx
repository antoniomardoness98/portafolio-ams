import React from 'react'
import imgHtml from '../../media/html.png'
import imgCss from '../../media/css.png'
import imgReact from '../../media/react.png'
import imgBts from '../../media/bootstrap.png'
import imgMUI from '../../media/materialui.png'
import imgPhp from '../../media/php.jpg'
import './Slider.css'

const slidesInfo = [
  {
    src: imgHtml,
    alt:'HTML',
    desc: 'HTML 5',
  },
  {
    src: imgCss,
    alt: 'CSS',
    desc: 'CSS',
  },
  {
    src: imgReact,
    alt: 'React',
    desc: 'REACT JS',
  },
  {
    src: imgBts,
    alt: 'bts',
    desc: 'BOOTSTRAP',
  },
  {
    src: imgMUI,
    alt: 'Mui',
    desc: 'MATERIAL UI',
  },
  {
    src: imgPhp,
    alt: 'php',
    desc: 'PHP',
  },
]

const slides = slidesInfo.map( slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} width='300px' />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
))

export default slides