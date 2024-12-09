import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const RegisterModule = () => {
  const [firstName, setFirstname] = useState(undefined);
  const [lastName, setLastname] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register/",
          {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
          }
        );
        console.log(res);
        navigate("/")
      } catch(e) {
        alert(e.response.data.message)
      }
    };
    getData();
  };

  return (
    <div>
      <div className="registration-box">
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">Имя</label>
          <input
            type="text"
            id="first-name"
            placeholder="Введите ваше имя"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            required
          ></input>

          <label htmlFor="last-name">Фамилия</label>
          <input
            type="text"
            id="last-name"
            placeholder="Введите вашу фамилию"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            required
          ></input>

          <label htmlFor="email">Почта</label>
          <input
            type="email"
            id="email"
            placeholder="Введите вашу почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Создать аккаунт</button>
          <p className="account-question">
            Есть аккаунт? <Link to="/">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
