import React, {useState} from 'react';
// import axios from 'axios';
import './ReportSend.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useSelector} from "react-redux";
import Column from "../../components/Column";

const ReportSend = () => {
    const [scientistName, setScientistName] = useState('');
    const [reportContent, setReportContent] = useState('');
    const [file, setFile] = useState(null);
    const userName = useSelector(state => state.userName);
    const mode = useSelector(state => state.mode);


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     const formData = new FormData();
    //     formData.append('scientistName', scientistName);
    //     formData.append('reportContent', reportContent);
    //     if (file) {
    //         formData.append('file', file);
    //     }
    //     try {
    //         // Замените URL на адрес вашего сервера
    //         // await axios.post('https://your-server.com/reports', formData);
    //         alert('Отчет успешно отправлен!');
    //     } catch (error) {
    //         console.error('Ошибка при отправке отчета:', error);
    //         alert('Произошла ошибка при отправке отчета. Пожалуйста, попробуйте еще раз.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // const handleFileChange = (event) => {
    //     setFile(event.target.files[0]);
    // };

    return (
        <Column className={`sender sender-${mode}`}>
            <Navbar/>
            <Footer userName={userName}/>
        </Column>
    );
};
export default ReportSend;
