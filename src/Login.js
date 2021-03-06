import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';




function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const registerHandler = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login_logo'
                    src='https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='signin_button' type='submit' onClick={signIn}>Sign-in</button>
                </form>

                <p>
                    By sigining-in you agree to Amazon-Clone's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='register_button' type='submit' onClick={registerHandler}>Create your Amazon Account</button> 
            </div>
        </div>
    )
}

export default Login
