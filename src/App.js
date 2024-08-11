import Hero from "./sections/Hero"
import OurServices from "./sections/OurServices"
import AboutUs from "./sections/AboutUs"
import Menu from "./sections/Menu"
import Chef from "./sections/Chef"

import "./App.css"
import Review from "./sections/Review"

function App() {
  return (
    <div className='App'>
      <Hero />
      <OurServices />
      <AboutUs />
      <Menu />
      <Chef />
      <Review />
    </div>
  )
}

export default App
