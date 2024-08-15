import Button from "../UI/Button"
import { FaStar, FaCartArrowDown, FaRegHeart } from "react-icons/fa"
import "./FoodBlock.css"

function FoodBlock({
  background,
  stars,
  title,
  description,
  price,
  onAddToCart,
}) {
  return (
    <div className='food-block'>
      <div
        className='food-block-img'
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className='food-block_main-conteiner'>
        <div className='stars'>
          {Array.from({ length: Math.round(stars) }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className='food-block_footer'>
          <p className='food-block_price'>${price}</p>
          <div className='food-block_footer-button'>
            <Button buttonType='filled'>
              <FaRegHeart />
            </Button>
            <Button
              buttonType='filled'
              onClick={onAddToCart}
            >
              <FaCartArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodBlock
