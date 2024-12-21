import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/authApi";

export const RegisterModule = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        await register(firstName, lastName, email, password);
        navigate("/");
      } catch (e) {
        alert(e);
      }
    };
    getData();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Регистрация</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Имя
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Введите ваше имя"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Фамилия
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Введите вашу фамилию"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Почта
            </label>
            <input
              type="email"
              id="email"
              placeholder="Введите вашу почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Создать аккаунт
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Есть аккаунт?{" "}
            <Link
              to="/"
              className="text-indigo-600 hover:underline"
            >
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
