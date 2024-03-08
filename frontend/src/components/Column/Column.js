import "./Column.css";

function Column(props) {
    return (
        <div className={`column ${props.className}`.trim()}>
            {props.children}
        </div>
    )
}
export default Column;
