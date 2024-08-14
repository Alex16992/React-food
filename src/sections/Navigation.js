import React, { useState } from "react"

import Button from "../components/UI/Button"
import "./Navigation.css"

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className='burger'>
        <div
          className={isOpen ? "burger-icon open" : "burger-icon"}
          onClick={toggleMenu}
        >
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>
      </div>
      <div
        className={
          isOpen ? "nav-links open header-menu" : "nav-links header-menu"
        }
      >
        <div className='logo-container'>
          <a
            href='/'
            className='logo'
          >
            Food
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Menu</a>
            </li>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Restaurant</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='auth-buttons'>
          <Button buttonType='outlined'>Login</Button>
          <Button buttonType='filled'>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
