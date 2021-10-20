import React from 'react';
import { useHistory } from "react-router-dom";

export default function Login(props){
    const history = useHistory()

    const doLogin = ()=>{
        localStorage.setItem('login','true')
        history.push("/");
        props.onLoginChange(true);
    }
    
    return(
        <div className="mb-5">
            <h1>Login</h1>
            <p>This is just a simple Login page simulation</p>
            <p>Just click the login button below to do the login</p>
            <button className="btn btn-lg btn-primary" onClick={doLogin}>Login</button>
        </div>
    )
}