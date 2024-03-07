import  "./Column.css";

//TODO check className not adding as undefined
function Column(props) {
    return (
        <div className={`column ${props.className}`.trim()}>
            {props.children}
        </div>
    )
}
export default Column;