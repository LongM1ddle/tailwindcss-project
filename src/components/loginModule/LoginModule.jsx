import { Link } from "react-router-dom"

export const LoginModule = () => { 
    return (
<div>
<div className="registration-box">
    <h1>Вход в аккаунт</h1>
    <form>
        
        <label for="email">Почта</label>
        <input type="email" id="email" placeholder="Введите вашу почту" required></input>

        <label for="password">Пароль</label>
        <input type="password" id="password" placeholder="Введите ваш пароль" required></input>

        <div class="remember-me">
            <input type="checkbox" id="remember"></input>
            <label for="remember">Запомнить меня</label>
        </div>

        <button type="submit">Создать аккаунт</button>
        <p class="account-question">Нет аккаунта? <Link to="/">Создать</Link></p>
    </form>
    </div>
    </div>
)
}