import React, { useState } from 'react';
// import axios from 'axios';
import './ReportSend.css';

const ReportSend = () => {
    const [scientistName, setScientistName] = useState('');
    const [reportContent, setReportContent] = useState('');
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('scientistName', scientistName);
        formData.append('reportContent', reportContent);
        if (file) {
            formData.append('file', file);
        }
        try {
            // Замените URL на адрес вашего сервера
            // await axios.post('https://your-server.com/reports', formData);
            alert('Отчет успешно отправлен!');
        } catch (error) {
            console.error('Ошибка при отправке отчета:', error);
            alert('Произошла ошибка при отправке отчета. Пожалуйста, попробуйте еще раз.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя ученого:
                <input type="text" value={scientistName} onChange={(e) => setScientistName(e.target.value)} required />
            </label>
            <label>
                Содержание отчета:
                <textarea value={reportContent} onChange={(e) => setReportContent(e.target.value)} required />
            </label>
            <label>
                Приложенный файл:
                <input type="file" onChange={handleFileChange} />
            </label>
            <input type="submit" value="Отправить отчет" disabled={isLoading} />
        </form>
    );
};
export default ReportSend;