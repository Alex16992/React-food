import Button from "../components/UI/Button"
import "./Navigation.css"

function Navigation() {
  return (
    <header>
      <div class='logo-container'>
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
        <Button buttonType='text'>Login</Button>
        <Button buttonType='filled'>Sign Up</Button>
      </div>
    </header>
  )
}

export default Navigation
