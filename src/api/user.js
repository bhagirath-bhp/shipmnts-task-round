import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${uri}/users/login`, { email, password })
        if (response.status == 200) {
            Cookies.set('token', response.data.token)
            return { message: "Logged In Successfully !", success: true, userId: response.data.userId, token: response.data.token, role: response.data.role }
        }
        return false
    } catch (error) {
        return { message: error.response.data, success: false };
    }
}


// Signup
export const signup = async (full_name, email, password, phone_number) => {
    try {
        const response = await axios.post(`${uri}/users/signup`, { full_name, email, password, phone_number });
        console.log(response);
        if (response.status === 200) {
            Cookies.set('token', response.data.token)
            return { message: "Signed Up Successfully !", success: true };
        }
        return false;
    } catch (error) {
        // console.error(error);
        return { message: error.response.data, success: false };
    }
};
