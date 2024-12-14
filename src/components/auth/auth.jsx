import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  const navigation = useNavigate();
  const [state, setState] = useState(() => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else if (sessionStorage.getItem("user")) {
      return JSON.parse(sessionStorage.getItem("user"));
    } else {
      return false;
    }
  });
  useEffect(() => {
    if (state) {
      const dataUser = state;
      setAuth(true);
      setToken(dataUser.token);
      setEmail(dataUser.user.email);
      setName(dataUser.user.name);
      navigation("/profile");
    }
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        token,
        setToken,
        email,
        setEmail,
        name,
        setName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
