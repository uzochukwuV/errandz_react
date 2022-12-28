/*  redux actions */

import axios from "axios";
import store from "../main";


export const authStart =()=>{
    return {
        type: "AUTH_START",
    }
}

const authSuccess = (token)=> {
    return {
        type: "AUTH_SUCCESS",
        token: token
    }
}

// these are selectors for dispatching actions
export const authFail=error=> {
    return {
        type: "AUTH_SUCCESS",
        token: token,
    }
}

const authLogout = ()=> {
    type: "AUTH_LOGOUT"
}

export const authRegister =(email, password1, password2) => {
    return dispatch => {
        console.log("auth register stated");
        dispatch(authStart());

        axios.post("http://127.0.0.1:8000/rest-auth/registration/", {
            
            password1: password1,
            password2: password2,
            email: email,
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=> console.log(err.response.data))
    }
}

export const authLogin =( email, password) => {
    return dispatch => {
        console.log("authstart diapatched")
        store.dispatch(authStart());

        axios
            .post("http://127.0.0.1:8000/rest-auth/login/", {
                email:email,
                password:password,
            })
            .then(res=> {
                console.log(res.data);
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                console.log(token);
                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate);
                dispatch(authSuccess(token));
                
            })
    }
}

export const Logout=()=>{
    return dispatch =>{
        dispatch(authLogout)
        localStorage.clear()
    }
}