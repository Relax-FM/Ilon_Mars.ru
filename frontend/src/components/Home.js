import {Link} from "react-router-dom";
import {useState} from "react";

function Home() {
    const [mode, setMode] = useState("mars");
    const [text, setText] = useState("Земля");

    const toggleMode = () => {
        if (mode === "earth") {
            setMode("mars");
            setText("Земля");
        } else {
            setMode("earth");
            setText("Марс");
        }
    };

    return (
        <div className={`page ${mode}`}>
            <div className="page__header">
                <h1 className="page__title">
                    {text + ". "}
                    Наука. Будущее.
                </h1>
            </div>
            <div className="page__body info">
                <button className="no-button info__item-planet" onClick={toggleMode} data-planet={text}>
                </button>
                <Link to="/auth">
                    <button className="no-button info__item-btn">
                        Авторизация
                    </button>
                </Link>
                <button className="no-button info__item-time" data-time="1:00(Msc)"></button>
            </div>

        </div>
    );
}

export default Home;