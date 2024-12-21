import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { login } from "../api/authApi";

export const LoginModule = () => {
  const { setAuth, setToken, setEmail, setName } = useAuth();
  const [email, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Вход в аккаунт
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              onChange={(e) => setInputEmail(e.target.value)}
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

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              onChange={(e) => setRememberLogin(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700"
            >
              Запомнить меня
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Войти
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Нет аккаунта?{" "}
            <Link to="register" className="text-indigo-600 hover:underline">
              Создать
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
