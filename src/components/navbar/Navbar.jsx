import React, {useState} from 'react'
import imgLogo from '../../media/logo.png'
import './Navbar.css'

const Navbar = (props) => {

  const {isScrolling} = props
  const [open, setOpen] = useState(false)
  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }
  const toTheEnd = () => {
    window.scrollTo({top:3000, left:0, behavior:'smooth'})
  }


  return (
    <div>
      <nav className={`${isScrolling > 20 ? 'scrolling' : ''}`}>

        <div className="logo"><img src={imgLogo} alt="" onClick={toTheTop}/></div>

        <ul className="nav-links" style={{transform:open ? "translateX(0px)" : "" }}>
          <li> <a href="#aboutme">About Me</a></li>
          <li> <a href="#conocimientos">Conocimientos</a></li>
          <li> <a href='#contacto'onClick={toTheEnd}>Contactame</a></li>
        </ul>

        <i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>

      </nav>
    </div>
  )
}

export default Navbar
