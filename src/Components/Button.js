import "./Button.css"
const Button = ({className, value, onClick}) => {
    return (
        <button className="Button" onClick={onClick}>
            {value}
        </button>
    )
}
export default Button