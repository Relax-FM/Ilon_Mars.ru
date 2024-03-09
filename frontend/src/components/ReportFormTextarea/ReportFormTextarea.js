import "./ReportFormTextarea.css"

function  ReportFormTextarea({value, className}) {
    className = className ? className : '';
    return (
        <div className={"form-textarea-container"}>
            <label className={"textarea-label"} htmlFor="textarea">ТЕКСТОВЫЙ ОТЧЕТ</label>
            <textarea name="textarea" className={`form-textarea ${className}`} required={true} placeholder={"Введите" +
                " текст отчета..."}/>
        </div>
    )
}
export default ReportFormTextarea;
