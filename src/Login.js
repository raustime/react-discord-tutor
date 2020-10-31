import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message));
    };

    return (
        <div className="login">
            <h2>You need to login</h2>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
