import "./ReportFormInputFile.css"
import Row from "../Row/Row";
import {useDispatch, useSelector} from "react-redux";
import {setFile} from "../../redux/actions";

function ReportFormInputFile() {
    const dispatch = useDispatch();
    const fileName = useSelector(state => state.file);
    
    const handleFileChange = (e) => {
        dispatch(setFile(e.target.files[0].name))
    };
    
    return (
        <div className="form-file-container">
            <Row>
                <label htmlFor="file">Файлы для загрузки</label>
                <button className={"no-button"} onClick={() => document.getElementById("input-file").click()} type={"button"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M4.61328 9.22693H13.8404" stroke="#BF4621" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.22852 13.8405V4.6134" stroke="#BF4621" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </Row>
            <input type="file" id="input-file" onChange={handleFileChange} />
            {fileName && (
                <Row className="file-info">
                    <span>{fileName}</span>
                    <button className={"no-button"} onClick={() => dispatch(setFile(''))} type={"button"}>
                        <img src={"./pics/trash.png"} alt={""}/>
                    </button>
                </Row>
            )}
        </div>

    )
}

export default ReportFormInputFile;
