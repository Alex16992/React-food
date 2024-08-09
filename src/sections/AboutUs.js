import Button from "../components/UI/Button"
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className='about-us'>
      <div className='about-us_left'></div>
      <div className='about-us_right'>
        <span className='highlight'>About Us</span>
        <h2>
          The Best Enjoyable <span className='highlight'>Place</span> Around You
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in
          cursus at tincidunt sem. Ipsum tristique volutpat nudu elementum et,
          vitae purus a scelerisque massa. Cras sit et tristique potenti purus.
          Pharetra vestibulum, nisl feugiat at commodo diam neque amet. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in cursus
          at tincidunt sem. Ipsum tristique volutpat nudu elementum et, vitae
          purus a scelerisque massa. Cras sit et tristique potenti purus.
          Pharetra vestibulum, nisl feugiat at commodo diam neque amet.
        </p>
        <p className='about-us_bold-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in
          cursus at tincidunt sem.
        </p>
        <Button buttonType='filled'>Learn More</Button>
      </div>
    </div>
  )
}

export default AboutUs
