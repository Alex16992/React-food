import { useState } from "react"
import Button from "./Button"
import { FaShoppingCart } from "react-icons/fa"
import "./Cart.css"

function Cart({ order }) {
  const [cartOpen, setCartOpen] = useState(false)

  // Подсчет количества каждой пиццы и сохранение информации о ней
  const pizzaCount = order.reduce((acc, pizza) => {
    if (acc[pizza.id]) {
      acc[pizza.id].count += 1
    } else {
      acc[pizza.id] = {
        name: pizza.name,
        image_url: pizza.image_url,
        price: pizza.price,
        count: 1,
      }
    }
    return acc
  }, {})

  const totalAmount = Object.values(pizzaCount).reduce(
    (total, pizza) => total + pizza.count * pizza.price,
    0
  )

  return (
    <div
      className={cartOpen ? "cart cart-open" : "cart cart-closed"}
      onClick={() => setCartOpen(!cartOpen)}
    >
      {!cartOpen && <FaShoppingCart />}
      {cartOpen && (
        <div className='cart-content'>
          <div className='cart-content_order'>
            <h3>Your order</h3>
            <ul>
              {Object.values(pizzaCount).map((pizza, index) => (
                <li key={index}>
                  <div className='cart-content_left'>
                    <img
                      src={pizza.image_url}
                      alt={pizza.name}
                    />
                    {pizza.name}{" "}
                    <span className='highlight'>x{pizza.count}</span>
                  </div>
                  <div className='cart-content_right'>
                    ${pizza.count * pizza.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='cart-footer'>
            <div className='cart-footer_total'>
              <h4>Total:</h4>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <Button buttonType='filled-light'>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
