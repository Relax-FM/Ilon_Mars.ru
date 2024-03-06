import React, { useState } from 'react';
import './Login.scss'

function Login({ planet }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        alert(login);
        alert(password);
    }

    return <form onSubmit={handleSubmit}>
        <div class="login-form">
            <div class="login-form__input-list">
                <label>
                    <input type="login" class={"login-form__login-field login-form__login-field_" + planet} value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Логин' required />
                </label>
                <label>
                    <input type="password" class={"login-form__password-field login-form__password-field_" + planet} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='пароль' required />
                </label>
            </div>
            <div>
                <input type="submit" value="->" class={"login-form__submit-button login-form__submit-button_" + planet} disabled={isLoading} />
            </div>
        </div>
    </form>;
}

export default Login;