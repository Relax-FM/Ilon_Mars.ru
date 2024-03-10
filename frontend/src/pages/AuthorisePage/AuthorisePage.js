import React, {useEffect}  from 'react';
import './AuthorisePage.scss';
import Login from '../../components/LoginField/index';
import {useDispatch, useSelector} from "react-redux";
import {setMode} from "../../redux/actions";

function AuthorisePage() {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.mode);

    const changePlanet = (event) => {
        if (mode === 'mars') {
            dispatch(setMode('earth'));
        } else {
            dispatch(setMode('mars'));
        }
    }


    useEffect(() => {
        const target = document.querySelector('.authorise__change-planet');
        if (mode === 'earth') {
            target.textContent = 'Земля';
        } else {
            target.textContent = 'Марс';
        }
    }, [mode]);

    return (
        <div class="authorise">
            <div class="authorise__upper">
                <span class="authorise__auth-text">Atomstar</span>
                <span class="authorise__change-planet" onClick = {changePlanet}>Земля </span>
            </div>
            <div class="authorise__auth-word">Авторизация</div>
            <Login planet={mode}/>
            <div class={"authorise__planet-pic-wrapper_" + mode}>
                <div className={"authorise__planet-pic authorise__planet-pic_" + mode}></div>
            </div>
        </div>
    );
}

export default AuthorisePage
