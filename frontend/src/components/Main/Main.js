import "./Main.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Main() {
    return (
        <div className="page">
            <Navbar/>

            <h1>Здравствуйте, Иван!</h1>
            <p>БЛИЖАЙШИЕ СОЕДИНЕНИЯ</p>
            <Footer/>
        </div>
    )
}

export default Main;