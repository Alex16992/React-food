import FoodBlock from "../components/Items/FoodBlock"
import Button from "../components/UI/Button"
import { FaLongArrowAltRight } from "react-icons/fa"
import "./Menu.css"

function Menu() {
  return (
    <div className='menu'>
      <span className='highlight'>Menu</span>
      <h2>Choose Your Test</h2>

      <div className='menu-container'>
        <FoodBlock
          background='./image/menu-1.jpg'
          stars={5}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />
        <FoodBlock
          background='./image/menu-2.jpg'
          stars={4}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />{" "}
        <FoodBlock
          background='./image/menu-3.jpg'
          stars={5}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />{" "}
        <FoodBlock
          background='./image/menu-4.jpg'
          stars={5}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />{" "}
        <FoodBlock
          background='./image/menu-5.jpg'
          stars={3}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />{" "}
        <FoodBlock
          background='./image/menu-6.jpg'
          stars={5}
          title='Pizza'
          description='Lorem ipsum dolor sit amet, consectetur adipsen piscing elit. Maece nas in cursus at tincidunt se. Ipsum tristique volutpat nudu eleme nt.'
          price={20.0}
        />
      </div>
      <div className='menu-footer'>
        <Button buttonType='filled'>
          See More <FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  )
}

export default Menu
