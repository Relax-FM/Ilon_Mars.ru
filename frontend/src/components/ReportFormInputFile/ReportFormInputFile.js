import "./ReportFormInputFile.css"
import Row from "../Row/Row";

function  ReportFormInputFile() {
    return (
        <div className="form-file-container">
            <Row>
                <label htmlFor="file">Файлы для загрузки</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M4.61328 9.22693H13.8404" stroke="#BF4621" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.22852 13.8405V4.6134" stroke="#BF4621" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Row>
            <input type="file" name="file" id=""/>
        </div>
    )
}
export default ReportFormInputFile;
