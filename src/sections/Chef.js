import ChefBlock from "../components/Blocks/ChefBlock"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FaChevronLeft } from "react-icons/fa"
import "./Chef.css"

function Chef() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1150, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  }

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest
    return (
      <div>
        <button onClick={() => previous()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => next()}>
          <span>
            <FaChevronLeft />
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className='chef'>
      <div className='title-container'>
        <h2>
          Meet Our <span className='highlight'> Expert </span> Chef
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in
          cursus at tincidunt sem. Ipsum tristique volutpat nudu.
        </p>
      </div>

      <Carousel
        infinite={true}
        responsive={responsive}
      >
        <ChefBlock
          background='./image/chef-1.png'
          name='Vishal Khan'
          job='Head Chef'
        />
        <ChefBlock
          background='./image/chef-2.png'
          name='Mariya Khan'
          job='Head Chef'
        />
        <ChefBlock
          background='./image/chef-3.png'
          name='Vishal Khan'
          job='Head Chef'
        />
        <ChefBlock
          background='./image/chef-4.png'
          name='Vishal Khan'
          job='Head Chef'
        />
      </Carousel>
    </div>
  )
}

export default Chef
