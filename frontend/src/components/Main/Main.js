import "./Main.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Row from "../Row";
import {useSelector} from "react-redux";
// TODO: rename to MainPage
// TODO fix className logic in different files
// TODO add to reduxStore user info
function Main() {
    // const mode = useSelector(state => state.mode);
    const mode = "mars"

    return (
        <Row className={`main main-${mode}`}>
            <Navbar/>
            <div className="main__header">
                <h1 className={"main__title"}>Здравствуйте, Иван!</h1>
            </div>
            <div className="main__temp_class">
                <p>БЛИЖАЙШИЕ СОЕДИНЕНИЯ</p>
                <h1>ЗАГЛУШКА</h1>
            </div>
            <Footer/>
        </Row>
    )
}

export default Main;