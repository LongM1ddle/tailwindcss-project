import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)
const AuthProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false)
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    return(
        <AuthContext.Provider
        value={{
            isAuth,
            setAuth,
            token,
            setToken,
            email,
            setEmail,
            name,
            setName
        }}
        >
            {children}
            </AuthContext.Provider>
    )
}
export default AuthProvider