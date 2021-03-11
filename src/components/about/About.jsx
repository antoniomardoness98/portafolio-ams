import React from 'react'
import './About.css'
import imgGato from '../../media/gato.jpg'

const About = () => {
  return (
    <div className='about-container' id='aboutme'>
      <div className="about-desc">
        <h3> <b>Te contaré un poco sobre mi!</b> </h3>
        <hr/>
        <br/>
        <p>Mi nombre es: Antonio Mardones San Martin, actualmente soy estudiante de Ingenieria en Ejecución y computación informatica, tengo 23 años, soy   Chileno viviendo actualmente en la octava región.
          Mis mayores hobbies son el desarrollo web y los video-juegos!
        </p>
        <br/>
        <p>Tengo 2 mascotas, ambos son gatos, sus nombres: Chirimoya y Tigre.</p>
        <p>pd: Sus lolcitos?</p>
      </div>
      <div className="about-img">
        <img src={imgGato} alt="about" height='500px' width='100%' />
      </div>
    </div>
  )
}

export default About
