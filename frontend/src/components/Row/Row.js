import "./Row.css";

function Row({className, children}) {
    className = className || "";
    return (
        <div className={`row ${className}`.trim()}>
            {children}
        </div>
    )
}
export default Row;
