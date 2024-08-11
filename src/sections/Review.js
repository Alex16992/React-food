import ReviewBlock from "../components/Blocks/ReviewBlock"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import "./Review.css"

function Review() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const ButtonGroup = ({ next, previous, carouselState }: any) => {
    const { currentSlide } = carouselState
    return (
      <div className='carousel-button-group'>
        <button onClick={() => previous()}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={() => next()}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    )
  }

  return (
    <div className='review'>
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        infinite={true}
      >
        <ReviewBlock
          image='./image/review.png'
          name='Jonson Roy'
          stars={5}
          review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in cursus at tincidunt sem. Ipsum tristique volutpat nudu elementum et, vitae purus a scelerisque massa. Cras sit et tristique potenti purus. Pharetra vestibulum, nisl feugiat  at commodo diam neque amet.'
        />
        <ReviewBlock
          image='./image/review.png'
          name='Narek Hayk'
          stars={4}
          review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in cursus at tincidunt sem. Ipsum tristique volutpat nudu elementum et, vitae purus a scelerisque massa. Cras sit et tristique potenti purus. Pharetra vestibulum, nisl feugiat  at commodo diam neque amet.'
        />
        <ReviewBlock
          image='./image/review.png'
          name='Karen Gurgen'
          stars={3}
          review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maece nas in cursus at tincidunt sem. Ipsum tristique volutpat nudu elementum et, vitae purus a scelerisque massa. Cras sit et tristique potenti purus. Pharetra vestibulum, nisl feugiat  at commodo diam neque amet.'
        />
      </Carousel>
    </div>
  )
}

export default Review
