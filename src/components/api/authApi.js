import { instance } from "../axios/instance";

export const login = async (email, password) => {
    try {
        const res = await instance.post("/auth/login/", {
            email: email,
            password: password
        });
        if (res.status === 200) {
            const userData = await res.data
            return ({
                token: userData.token,
                user: userData.user
            })
        } else {
            return (
                res.data
            )
        }

    } catch (e) {
        const errorMsg = e.response.data.message;
        throw new Error(errorMsg)
    }
}

export const register = async (firstName, lastName, email, password) => {
    try {
        const res = await instance.post("/auth/register/", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        });
        if (res.status === 200) {
            const userData = await res.data
            return ({
                token: userData.token,
                user: userData.user
            })
        }

    } catch (e) {
        const errorMsg = e.response.data.message;
        throw new Error(errorMsg)
    }
}
export const logout = async () => {
    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
}
export const GetProfile = async (token) => {
    const res = await instance.get("users/profile", { headers: {"Authorization" : `Bearer ${token}`} })
    if (res.status === 200) {
        const userdata = await res.data
        return(
            userdata
        )
    }
}