import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { useEffect } from "react";

export const Profile = () => {
    const navigate = useNavigate()
    const { isAuth, name, email } = useAuth();
  
    const HandlerLogout = () => {
        localStorage.removeItem("user");
        navigate("/")
    }
    useEffect( () => {
        if (!isAuth) {
            navigate("/")
        }
    })  
    return (
    <>
      <h2>Username: {name}</h2>
      <h2>Email: {email}</h2>
      <button onClick={HandlerLogout}>logout</button>
    </>
  );
};