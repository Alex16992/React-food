import "./ChefBlock.css"

function ChefBlock({ background, name, job }) {
  return (
    <div className='chef-block-container'>
      <div
        className='chef-block'
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='chef-block_footer'>
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  )
}

export default ChefBlock
