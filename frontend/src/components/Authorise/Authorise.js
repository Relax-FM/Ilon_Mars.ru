import React, { useState } from 'react';
import './authorise.scss';
import Login from '../Login/Login';

const Authorise = () => {
    const [planet, setPlanet] = useState('earth');

    const changePlanet = (event) => {
        if (planet == 'earth') {
            setPlanet("mars");
            event.target.textContent = "Земля";
            
        } else {
            setPlanet("earth");
            event.target.textContent = "Марс";
        }
    }

    return (
        <div class="authorise">
            <div class="authorise__upper">
            <span class="authorise__auth-text">Atomstar</span>
            <span class="authorise__change-planet" onClick = {changePlanet}>Земля </span>
            </div>
            <div class="authorise__auth-word">Авторизация</div>
            {/* <form onSubmit={handleSubmit}>
                <div class="authorise__form">
                    <div class = "authorise__form-inputlist">
                        <label>
                            <input type="login" class={"authorise__login-field authorise__login-field_" + planet} value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Логин' required />
                        </label>
                        <label>
                            <input type="password" class={"authorise__password-field authorise__password-field_" + planet} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='пароль' required />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="->" class={"authorise__submit-button authorise__submit-button_" + planet} disabled={isLoading} />
                    </div>
                </div>
            </form> */}
            <Login planet={planet} />
            <div class={"authorise__planet-pic authorise__planet-pic_" + planet}></div>
        </div>
    );
};

export default Authorise;