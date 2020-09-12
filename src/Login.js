import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';



function Login() {
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
                    <input type='text'></input>

                    <h5>Password</h5>
                    <input type='password'></input>

                    <button className='signin_button'>Sign-in</button>
                </form>

                <p>
                    By sigining-in you agree to Amazon-Clone's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='register_button'>Create your Amazon Account</button> 
            </div>
        </div>
    )
}

export default Login
