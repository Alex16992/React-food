import Navigation from "./Navigation"

import "./Hero.css"
import Button from "../components/UI/Button"

function Hero() {
  return (
    <div className='hero'>
      <Navigation />
      <div className='hero-container'>
        <div className='hero-left'>
          <h1>
            Good <span className='highlight'>Food</span> & Teste For Daily Life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            semper vitae eleifend nunc, quam imperdiet. Lorem ipsum dolor sit
            amet, conse ctetur adipiscing elit. Molestie semper vitae eleifend
            nunc.
          </p>
          <div className='hero-buttons'>
            <Button buttonType='filled'>Order Now</Button>
            <Button buttonType='outlined'>Get the food</Button>
          </div>
        </div>
        <div className='hero-right'></div>
      </div>
    </div>
  )
}

export default Hero
