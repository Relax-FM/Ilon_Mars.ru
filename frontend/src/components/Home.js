import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const useCurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return time;
};

function Home() {
    const [mode, setMode] = useState("earth");
    const [text, setText] = useState("Земля");
    const time = useCurrentTime();


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
                <button className="no-button info__item-time" data-time={time}></button>
            </div>

        </div>
    );
}

export default Home;