import { Button } from 'react-bootstrap';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  const click = () => {
    navigate('/resume')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="navbar w-12">
          <nav>
            <h2 className="logo">Portfo<span>lio</span></h2>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About us</NavLink></li>
              <li><NavLink to='/service'>Service</NavLink></li>
              <li><NavLink to='/gallery'>Gallery</NavLink></li>
              <li><NavLink to='/contect'>Contect us</NavLink></li>
            </ul>
            <Button className="btn" onClick={() => { click() }}>Resume</Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;