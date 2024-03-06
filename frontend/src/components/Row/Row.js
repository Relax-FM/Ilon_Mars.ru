import  "./Row.css";

function Row(props) {
    return (
        <div className={`row ${props.className}`.trim()}>
            {props.children}
        </div>
    )
}
export default Row;