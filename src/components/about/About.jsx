import React from 'react'
import './About.css'
import imgPresentacion from '../../media/presentacion.png'

const About = () => {
  return (
    <div className='about-container' id='aboutme'>
      <div className="about-desc">
        <h3> <b>Te contaré un poco sobre mi!</b> </h3>
        <hr/>
        <br/>
        <p>Mi nombre es: Antonio Mardones San Martin, actualmente soy estudiante de Ingenieria en ejecución y computación informatica, cursando el cuarto año. <br/> Soy Chileno viviendo actualmente en la octava región en la ciudad de Concepción.
          Apasionado por el desarrollo web, me encanta aprender nuevas tecnologias!.
        </p>
        <br/>
        <p>Conocimientos medios - altos relacionado en el desarrollo Front-End</p>
      </div>
      <div className="about-img">
        <img src={imgPresentacion} alt="about" height='500px' width='100%' />
      </div>
    </div>
  )
}

export default About
