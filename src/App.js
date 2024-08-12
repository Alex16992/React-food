import Hero from "./sections/Hero"
import OurServices from "./sections/OurServices"
import AboutUs from "./sections/AboutUs"
import Menu from "./sections/Menu"
import Chef from "./sections/Chef"
import Review from "./sections/Review"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"

import "./App.css"

function App() {
  return (
    <div className='App'>
      <Hero />
      <OurServices />
      <AboutUs />
      <Menu />
      <Chef />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
