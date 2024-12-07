import { Link } from "react-router-dom"

export const RegisterModule = () => { 
    return (
<div>
<div className="registration-box">
    <h1>Регистрация</h1>
    <form>
        <label for="first-name">Имя</label>
        <input type="text" id="first-name" placeholder="Введите ваше имя" required></input>

        <label for="last-name">Фамилия</label>
        <input type="text" id="last-name" placeholder="Введите вашу фамилию" required></input>

        <label for="email">Почта</label>
        <input type="email" id="email" placeholder="Введите вашу почту" required></input>

        <label for="password">Пароль</label>
        <input type="password" id="password" placeholder="Введите ваш пароль" required></input>

        <div class="remember-me">
            <input type="checkbox" id="remember"></input>
            <label for="remember">Запомнить меня</label>
        </div>

        <button type="submit">Создать аккаунт</button>
        <p class="account-question">Есть аккаунт? <Link to="login">Создать</Link></p>
    </form>
    </div>
    </div>
)
}