import {Link} from "react-router-dom";
import {useState} from "react";

function Home() {
    const [mode, setMode] = useState("earth");

    const toggleMode = () => {
        if (mode === "earth") {
            setMode("mars");
        } else {
            setMode("earth");
        }
    };

    return (
        <div className={`page ${mode}`}>
            <div className="page__header">
                <h1 className="page__title">
                    {mode === "earth" ? "Земля. " : "Марс. "}
                    Наука. Будущее.
                </h1>
            </div>
            <div className="page__body info">
                <button className="no-button info__item-earth" onClick={toggleMode}>
                </button>
                <Link to="/auth">
                    <button className="no-button info__item-btn">
                        Авторизация
                    </button>
                </Link>
                <button className="no-button info__item-time"></button>
            </div>

        </div>
    );
}

export default Home;