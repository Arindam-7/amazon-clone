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
        </div>
    )
}

export default Login
