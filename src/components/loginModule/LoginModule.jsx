import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

export const LoginModule = () => {
  const { setAuth, setToken, setEmail, setName } = useAuth();
  const [email, setInputEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [isRememberLogin, setRememberLogin] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login/", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          const { token, user } = res.data;
          if (isRememberLogin) {
            localStorage.setItem("user", JSON.stringify({token, user}))
          } else {
            sessionStorage.setItem("user", JSON.stringify({token, user}))
          }
          console.log(user);
          setAuth(true);
          setToken(token);
          setEmail(user.email);
          setName(user.name);
          navigate("/profile")
        }
      } catch (e) {
        const errorMsg = e.response.data.message;
        alert(errorMsg);
      }
    };
    getData();
  };
  return (
    <div>
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
            <input type="checkbox"
            onChange={(e) => setRememberLogin(e.target.checked)} id="remember"></input>
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
