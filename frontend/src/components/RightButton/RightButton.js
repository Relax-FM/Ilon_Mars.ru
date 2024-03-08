import "./RightButton.css"

function RightButton({onClick, children, data, className, disabled}) {
    className = className ? className : '';
    if (!disabled) {
        className+= " hoverable"
    }
    return (
        <button className={`right-button ${className.trim()}`.trim()} onClick={onClick} data-right-button={data}>
            {children}
        </button>
    );
}

export default RightButton;
