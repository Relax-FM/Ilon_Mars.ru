import "./ReportFormTextarea.css"
import {useDispatch} from "react-redux";
import {setReportContent} from "../../redux/actions";

function  ReportFormTextarea({value, className}) {
    className = className ? className : '';
    const dispatch = useDispatch()

    const handleReportContentChang = (event) => {
        dispatch(setReportContent(event.target.value))
    }
    return (
        <div className={"form-textarea-container"}>
            <label className={"textarea-label"} htmlFor="textarea">ТЕКСТОВЫЙ ОТЧЕТ</label>
            <textarea name="textarea" className={`form-textarea ${className}`} required={true} placeholder={"Введите" +
                " текст отчета..."} onChange={handleReportContentChang}/>
        </div>
    )
}
export default ReportFormTextarea;
