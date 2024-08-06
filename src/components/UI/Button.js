import "./Button.css"

function Button({ children, buttonType }) {
  return <button className={`btn ${buttonType}`}>{children}</button>
}

export default Button
