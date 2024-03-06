import logo from "../logo.svg";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <h1 style={{ marginBottom: '50px' }}>Научная лаборатория на Марсе</h1>
            <div style={{ marginBottom: '20px' }}>
                <Link to="/authorise" style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Авторизация</Link>
                <Link to="/send-report" style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Отправить отчет</Link>
                <Link to="/view-reports" style={{ padding: '10px 20px', backgroundColor: '#28A745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Просмотреть отчеты</Link>
            </div>
        </div>
    );
}

export default Home;