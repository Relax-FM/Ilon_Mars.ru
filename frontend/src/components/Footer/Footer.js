import "./Footer.css";
import RightButton from "../RightButton";
import Column from "../Column/Column";

function Footer() {
    return (
        <Column className="footer">
            <p>Главное меню</p>
            <p>Создание отчетов</p>
            <p>Уведомления</p>
            <RightButton data={"ЗАГЛУШКА"} />
        </Column>
    )
}

export default Footer;