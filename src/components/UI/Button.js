import "./Button.css"

function Button({ children, buttonType, onClick }) {
  return (
    <button
      className={`btn ${buttonType}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
