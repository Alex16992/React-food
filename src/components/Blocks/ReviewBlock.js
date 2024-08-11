import "./ReviewBlock.css"
import { FaStar } from "react-icons/fa"

function ReviewBlock({ image, name, stars, review }) {
  return (
    <div className='review-block'>
      <div className='review-container'>
        <div className='review-left'>
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className='review-right'>
          <h3>{name}</h3>
          <div className='review-stars'>
            {Array.from({ length: stars }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewBlock
