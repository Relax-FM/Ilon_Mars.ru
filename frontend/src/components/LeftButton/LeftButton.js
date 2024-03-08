import "./LeftButton.css"

function LeftButton({onClick, children, data, className, disabled}) {
    className = className ? className : '';
    if (!disabled) {
        className+= " hoverable"
    }
    return (
        <button className={`left-button ${className.trim()}`.trim()} onClick={onClick} data-left-button={data}>
            {children}
        </button>
    );
}

export default LeftButton;