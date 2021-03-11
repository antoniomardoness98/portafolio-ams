import React from 'react'
import './Navbar.css'

const Navbar = (props) => {

  const {isScrolling} = props

  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
      
      <div className="navbar-logo" onClick={toTheTop}>
        <p>About Me | Conocimientos | Contactame!</p>
      </div>
    </nav>
  )
}

export default Navbar
