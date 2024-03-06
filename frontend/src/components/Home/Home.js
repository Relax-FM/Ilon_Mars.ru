import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import useCurrentTime from "./useCurrentTime";
import {setMode, setText} from "../../reduxStore/actions";


function Home() {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.mode);
    const text = useSelector(state => state.text);
    const time = useCurrentTime();

    const toggleMode = () => {
        if (mode === 'earth') {
            dispatch(setMode('mars'));
            dispatch(setText('Земля'));
        } else {
            dispatch(setMode('earth'));
            dispatch(setText('Марс'));
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
                <button className="no-button info-planet" onClick={toggleMode} data-planet={text}>
                </button>
                <Link to="/auth">
                    <button className="no-button info-btn">
                        Авторизация
                    </button>
                </Link>
                <button className="no-button info-time" data-time={time}></button>
            </div>

        </div>
    );
}

export default Home;