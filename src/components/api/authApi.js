import { instance } from "../axios/instance";

export const login = async (email, password) => {
    try {
        const res = await instance.post("login/", {
            email: email,
            password: password
        });
        console.log(res)
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
        const res = await instance.post("register/", {
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