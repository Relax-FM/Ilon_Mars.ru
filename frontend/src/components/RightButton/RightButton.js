import "./RightButton.css"

function RightButton({onClick, children, data, className, disabled, white}) {
    className = className ? className : '';
    if (!disabled) {
        className+= " hoverable"
    }
    const buttonStyle = white ? {backgroundColor: 'white'} : {};
    return (
        <button style={buttonStyle} className={`right-button ${className.trim()}`.trim()} onClick={onClick} data-right-button={data}>
            {children}
        </button>
    );
}

export default RightButton;
