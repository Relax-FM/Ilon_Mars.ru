import "./ReportFormInput.css"

function  ReportFormInput({value, className}) {
    className = className ? className : '';

    return (
        <input className={`form-input-2 ${className}`} type="text" value={value} readOnly={true}/>
    )
}
export default ReportFormInput;
