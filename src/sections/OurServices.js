import OurServicesBlock from "../components/UI/OurServicesBlock"
import { CiDeliveryTruck } from "react-icons/ci"
import { PiMedalThin } from "react-icons/pi"
import { IoFastFoodOutline } from "react-icons/io5"
import "./OurServices.css"

function OurServices() {
  return (
    <div className='our-services'>
      <div className='title-container'>
        <h2>
          Our <span className='highlight'>Services</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipis cing elit. Molestie
          semper vitae elit eleif.
        </p>
      </div>
      <div className='our-services-block-container'>
        <OurServicesBlock
          icons={<CiDeliveryTruck />}
          title='Fast Dalivery'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          semper vitae elit eleifend nunc, quam imperdiet. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Molestie semper vitae elit eleifend
          nunc, quam imperdiet.
        </OurServicesBlock>
        <OurServicesBlock
          icons={<PiMedalThin />}
          title='Quality Food'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          semper vitae elit eleifend nunc, quam imperdiet. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Molestie semper vitae elit eleifend
          nunc, quam imperdiet.
        </OurServicesBlock>
        <OurServicesBlock
          icons={<IoFastFoodOutline />}
          title='Super Testy'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          semper vitae elit eleifend nunc, quam imperdiet. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Molestie semper vitae elit eleifend
          nunc, quam imperdiet.
        </OurServicesBlock>
      </div>
    </div>
  )
}

export default OurServices
