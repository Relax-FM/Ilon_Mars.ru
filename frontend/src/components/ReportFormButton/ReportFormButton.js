import "./ReportFormButton.css"

function  ReportFormButton({action}) {
    return (
        <button className={"report-form-button hoverable"} type="submit" onClick={action}>Отправить</button>
    )
}
export default ReportFormButton;
