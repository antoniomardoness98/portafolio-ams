import React from 'react'
import './About.css'
import imgGato from '../../media/gato.jpg'

const About = () => {
  return (
    <div className='about-container'>
      <div className="about-desc">
        <h3>Te contaré un poco sobre mi!</h3>
        <hr/>
        <br/>
        <p>Estudiante de Ingenieria en Ejecución y computación informatica, Me llamo: Antonio Mardones San Martin, tengo 23 años, soy Chileno.
          Mis mayores hobbies son el desarrollo web y los video-juegos!
        </p>
        <br/>
        <p>Tengo 2 mascotas, ambos son gatos, sus nombres: Chirimoya y Tigre.</p>
      </div>
      <div className="about-img">
        <img src={imgGato} alt="about" height='500px' />
      </div>
    </div>
  )
}

export default About
