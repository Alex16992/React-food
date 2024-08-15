import { useState } from "react"
import FoodBlock from "../components/Blocks/FoodBlock"
import Button from "../components/UI/Button"
import { MdExpandMore } from "react-icons/md"
import "./Menu.css"
import pizzas from "../pizzas.json"

function Menu({ onAddToCart }) {
  const [visiblePizzas, setVisiblePizzas] = useState(3)

  const handleSeeMore = () => {
    setVisiblePizzas((prevVisiblePizzas) => prevVisiblePizzas + 3)
  }

  return (
    <div className='menu'>
      <span className='highlight'>Menu</span>
      <h2>Choose Your Test</h2>

      <div className='menu-container'>
        {pizzas.slice(0, visiblePizzas).map((pizza, index) => (
          <FoodBlock
            key={index}
            background={pizza.image_url}
            stars={pizza.stars}
            title={pizza.name}
            description={pizza.description}
            price={pizza.price}
            onAddToCart={() => onAddToCart(pizza)}
          />
        ))}
      </div>

      {visiblePizzas < pizzas.length && (
        <div className='menu-footer'>
          <Button
            buttonType='filled'
            onClick={handleSeeMore}
          >
            See More <MdExpandMore />
          </Button>
        </div>
      )}
    </div>
  )
}

export default Menu
