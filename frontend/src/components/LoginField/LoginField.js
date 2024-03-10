import React, {useState, useEffect} from 'react';
import './LoginField.scss'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setMode, setToken, setUserName} from "../../redux/actions";


function LoginField(planet) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    let errorText = '';
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const params = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            params.body = JSON.stringify({username: login, password: password});
            const response = await fetch('http://localhost:90/api/login/', params);

            try {
                const responseJson = await response.json();
                if (response.status === 200) {
                    const token = responseJson['token'];
                    const name = responseJson['user']['name'] + responseJson['user']['surname'];
                    const mode = responseJson['user']['planet']
                    dispatch(setToken(token));
                    dispatch(setUserName(name));
                    dispatch(setMode(mode));
                    navigate('/main');
                } else {
                    errorText = 'Неправильный логин или пароль';
                    document.querySelector('.login-form__error').textContent = 'Неправильный логин или пароль';
                }
            } catch (e) {
                errorText = 'Неправильный логин или пароль';
            }
        } catch (e) {
            document.querySelector('.login-form__error').textContent = 'Неправильный логин или пароль';
        }
}

const handleLoginInput = (event) => {
    setLogin(event.target.value);
}

const handlePasswordInput = (event) => {
    setPassword(event.target.value);
}

useEffect(() => {
    const inputButton = document.querySelector('.login-form__submit-button');
    if ((login !== '') && (password !== '')) {
        inputButton.classList.remove('login-form__submit-button_earth');
        inputButton.classList.remove('login-form__submit-button_mars');
        inputButton.classList.remove('login-form__submit-button_incorrect');
        inputButton.classList.add('login-form__submit-button_' + planet['planet']);
    } else {
        inputButton.classList.remove('login-form__submit-button_earth');
        inputButton.classList.remove('login-form__submit-button_mars');
        inputButton.classList.add('login-form__submit-button_incorrect');
    }
}, [login, password, planet])

console.log(planet)

return <form onSubmit={async (e) => await handleSubmit(e)}>
    <p className="login-form__error">{errorText}</p>
    <div class="login-form">
        <div class="login-form__input-list">
            <label>
                <input type="login" class={"login-form__login-field login-form__login-field_" + planet['planet']}
                       value={login} onChange={(e) => handleLoginInput(e)} placeholder='Логин' required/>
            </label>
            <label>
                <input type="password"
                       class={"login-form__password-field login-form__password-field_" + planet['planet']}
                       value={password} onChange={(e) => handlePasswordInput(e)} placeholder='пароль' required/>
            </label>
        </div>
        <div class="login-form__submit-wrapper">
            <input type="submit" value="->" class="login-form__submit-button login-form__submit-button_incorrect"
                   disabled={isLoading}/>
        </div>
    </div>
</form>;
}

export default LoginField
