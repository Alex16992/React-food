import { useState } from "react"

import Hero from "./sections/Hero"
import OurServices from "./sections/OurServices"
import AboutUs from "./sections/AboutUs"
import Menu from "./sections/Menu"
import Chef from "./sections/Chef"
import Review from "./sections/Review"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"
import Cart from "./components/UI/Cart"

import "./App.css"

function App() {
  const [order, setOrder] = useState([])

  const handleAddToCart = (pizza) => {
    setOrder([...order, pizza])
  }

  return (
    <div className='App'>
      <Cart order={order} />
      <Hero />
      <OurServices />
      <AboutUs />
      <Menu onAddToCart={handleAddToCart} />
      <Chef />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
