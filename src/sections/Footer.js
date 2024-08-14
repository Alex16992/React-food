import Button from "../components/UI/Button"
import {
  SlSocialVkontakte,
  SlSocialGoogle,
  SlSocialReddit,
} from "react-icons/sl"

import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-left'>
          <h3>Food</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            cursus at tincidunt sem. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className='social-btn'>
            <Button buttonType='filled-light'>
              <SlSocialVkontakte />
            </Button>
            <Button buttonType='filled-light'>
              <SlSocialGoogle />
            </Button>
            <Button buttonType='filled-light'>
              <SlSocialReddit />
            </Button>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-right_support'>
            <h3>Support</h3>
            <a href='#'>Account</a>
            <a href='#'>Suppoprt Center</a>
            <a href='#'>Feedback</a>
            <a href='#'>Accebility</a>
          </div>
          <div className='footer-right_our_menu'>
            <h3>Our Menu</h3>
            <a href='#'>Special</a>
            <a href='#'>Popular</a>
            <a href='#'>Categories</a>
          </div>
          <div className='footer-right_useful_links'>
            <h3>Useful Links</h3>
            <a href='#'>Payment & Tax</a>
            <a href='#'>Terms of Services</a>
            <a href='#'>privacy Policy</a>
            <a href='#'>About Us</a>
          </div>
          <div className='footer-right_contacts'>
            <h3>Get in touch</h3>
            <a href='#'>foodemail@gmail.com</a>
            <a href='#'>+254187566154</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
