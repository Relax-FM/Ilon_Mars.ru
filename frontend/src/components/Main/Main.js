import "./Main.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Row from "../Row";
// TODO: rename to MainPage
function Main() {
    return (
        <Row className="main">
            <Navbar/>
            <h1>Здравствуйте, Иван!</h1>
            <p>БЛИЖАЙШИЕ СОЕДИНЕНИЯ</p>
            <Footer/>
        </Row>
    )
}

export default Main;