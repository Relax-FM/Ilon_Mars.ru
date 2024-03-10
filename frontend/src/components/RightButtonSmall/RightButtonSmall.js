import "./RightButtonSmall.css";

function RightButtonSmall({onClick, children, data, className, disabled}) {
    className = className ? className : '';
    if (!disabled) {
        className+= " hoverable"
    }
    return (
        <button className={`right-button-small ${className.trim()}`.trim()} onClick={onClick} data-right-button={data}>
            {children}
        </button>
    );
}
export default RightButtonSmall;
