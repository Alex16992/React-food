import "./OurServicesBlock.css"

function OurServicesBlock({ icons, title, children }) {
  return (
    <div className='our-services-block'>
      {icons}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export default OurServicesBlock
