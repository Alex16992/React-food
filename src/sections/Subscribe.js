import Button from "../components/UI/Button"

import "./Subscribe.css"

function Subscribe() {
  return (
    <div className='subscribe'>
      <div className='subscribe-title'>
        <h2>Subscribe To Our News Letter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
          cursus at tincidunt sem. Ipsum tristique volutpat elementum et,
        </p>
      </div>
      <input
        type='text'
        placeholder='Enter your email...'
      />
      <Button buttonType='filled'>Subscribe</Button>
    </div>
  )
}

export default Subscribe
