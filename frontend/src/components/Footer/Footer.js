import "./Footer.css";
import RightButton from "../RightButton";
import Row from "../Row/Row";
import {Link} from "react-router-dom";

// TODO make footer and navbar margins as variables in css

function Footer({userName}) {
    return (
        <Row className="footer">
            <Link to={"/main"} className={"hoverable"}>
                <p>Главное меню</p>
            </Link>
            <Link to={"/send-report"} className={"hoverable"}>
                <p>Создание отчетов</p>
            </Link>
            <Link to={"/notification"} className={"hoverable"}>
                <p>Уведомления</p>
            </Link>
            <RightButton data={userName} white={true}/>
        </Row>
    )
}

export default Footer;
