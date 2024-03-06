import "./Footer.css";
import RightButton from "../RightButton";

function Footer() {
    return (
        <div className="footer">
            <p>Главное меню</p>
            <p>Создание отчетов</p>
            <p>Уведомления</p>
            <RightButton data={"ЗАГЛУШКА"} />
        </div>
    )
}

export default Footer;