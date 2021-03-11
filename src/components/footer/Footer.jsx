import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
      
      <div className="footer-info">
        <h1>Antonio Mardones San Martin</h1>
        <p> <i>"Somos lo que elegimos ser"</i> </p>
      </div>

      <div className="footer-contact">
        <h3>Contact Me</h3>
        <p>And let's get down to work</p>
      </div>

      <div className="footer-sns">
        <div className="design-by">
          <p>Desing by: Antonio Mardones San Martin</p>
        </div>
        <div className="sns-links">
          <a href="https://instagram.com/1998.tsk" target='_blank' rel='noreferrer'>
            <i className='fab fa-instagram instagram'></i>
          </a>
          <a href="https://facebook.com/antonio.mardones.3979" target='_blank' rel='noreferrer' >
            <i className='fab fa-facebook facebook'></i>
          </a>
          <a href="https://twitter.com/GhoshiSK" target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
