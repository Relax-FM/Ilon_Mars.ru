import React from 'react';
import './ReportSend.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import Column from "../../components/Column";
import ReportFormInput from "../../components/ReportFormInput";
import ReportFormTextarea from "../../components/ReportFormTextarea";
import ReportFormInputFile from "../../components/ReportFormInputFile";
import ReportFormButton from "../../components/ReportFormButton";
import Row from "../../components/Row/Row";
import {setLoading} from "../../redux/actions";
// import axios from 'axios';
// TODO make main-earth and main-mars and sender-earth and sender-mars and page-earth and page-mars as components
const ReportSend = () => {
    const userName = useSelector(state => state.userName);
    const mode = useSelector(state => state.mode);
    const dispatch = useDispatch()
    const file = useSelector(state => state.file);
    const reportContent = useSelector(state => state.reportContent)
    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(setLoading(true))

        const formData = new FormData();
        formData.append('scientistName', userName);
        formData.append('reportContent', reportContent);

        if (file) {
            formData.append('file', file);
        }
        try {
            // Замените URL на адрес вашего сервера
            // await axios.post('https://your-server.com/reports', formData);
            alert('Отчет успешно отправлен!1212');
        } catch (error) {
            console.error('Ошибка при отправке отчета:', error);
            alert('Произошла ошибка при отправке отчета. Пожалуйста, попробуйте еще раз.');
        } finally {
            dispatch(setLoading(false))
        }
    };

    // const handleFileChange = (event) => {
    //     setFile(event.target.files[0]);
    // };

    return (
        <Column className={`sender sender-${mode}`}>
            <Navbar/>
            <div className="adaptive-width sender__body">
                <h1 className={"sender__title"}>СОЗДАНИЕ ОТЧЕТА </h1>
                <form method="post" className={"report-form-column"} onSubmit={handleSubmit}>
                    <ReportFormInput className={"report-form-input"} value={userName}/>
                   <Row className={"report-form-row"}>
                       <ReportFormTextarea className={"report-form-textarea"} />
                       <div className={"report-form-column-right"}>
                           <ReportFormInputFile/>
                           <ReportFormButton action={()=>{}}/>
                       </div>
                   </Row>
                </form>
            </div>
            <Footer userName={userName}/>
        </Column>
    );
};
export default ReportSend;
