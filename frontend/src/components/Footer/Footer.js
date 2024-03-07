import "./Footer.css";
import RightButton from "../RightButton";
import Column from "../Column/Column";
import {Link} from "react-router-dom";
import Row from "../Row";

// TODO make footer and navbar margins as variables in css

function Footer() {
    return (
        <Column className="footer">
            <Link to={"/main"} className={"hoverable"}>
                <p>Главное меню</p>
            </Link>
            <Link to={"/send-report"} className={"hoverable"}>
                <p>Создание отчетов</p>
            </Link>
            <Link to={"/notification"} className={"hoverable"}>
                <p>Уведомления</p>
            </Link>
            <RightButton data={"ЗАГЛУШКА"} white={true}/>
        </Column>
    )
}

export default Footer;