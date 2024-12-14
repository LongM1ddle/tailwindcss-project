import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { instance } from "../axios/instance";
import { login } from "../api/authApi";
import "../../app.css"

export const LoginModule = () => {
  const { setAuth, setToken, setEmail, setName } = useAuth();
  const [email, setInputEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isRememberLogin, setRememberLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        const { token, user } = await login(email, password);

        if (isRememberLogin) {
          localStorage.setItem("user", JSON.stringify({ token, user }));
        } else {
          sessionStorage.setItem("user", JSON.stringify({ token, user }));
        }
        console.log(user);
        setAuth(true);
        setToken(token);
        setEmail(user.email);
        setName(user.name);
        navigate("/profile");
      } catch (e) {
        alert(e);
      }
    };
    getData();
  };
  return (
    <div className="registration-box-container">
      <div className="registration-box">
        <h1>Вход в аккаунт</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Почта</label>
          <input
            type="email"
            id="email"
            placeholder="Введите вашу почту"
            value={email}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          ></input>

          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <div className="remember-me">
            <input
              type="checkbox"
              onChange={(e) => setRememberLogin(e.target.checked)}
              id="remember"
            ></input>
            <label htmlFor="remember">Запомнить меня</label>
          </div>

          <button type="submit">Войти</button>
          <p className="account-question">
            Нет аккаунта? <Link to="register">Создать</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
