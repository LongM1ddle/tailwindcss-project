import { Routes, Route, useNavigate, data } from "react-router-dom";
import "./App.css";
import { RegisterModule } from "./components/RegisterModule/registerModule";
import { LoginModule } from "./components/loginModule/LoginModule";
import { Profile } from "./components/profile/profile";
import { useState, useEffect } from "react";
import { useAuth } from "./components/auth/auth";

function App() {
  const navigation = useNavigate()
  const { setAuth, setToken, setEmail, setName } = useAuth();
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : false

  })
  useEffect(() => {
    if (state) {
      const dataUser = state
      setAuth(true)
      setToken(dataUser.token)
      setEmail(dataUser.user.email)
      setName(dataUser.user.name)
      navigation("/profile")
    } 
  }, [state])

  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterModule />}></Route>
        <Route path="/" element={<LoginModule />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
