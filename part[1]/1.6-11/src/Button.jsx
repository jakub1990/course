const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick} text={text}>{text}</button>
    )
}

export default Button;