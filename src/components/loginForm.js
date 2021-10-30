import React from 'react'
import './styles.scss';
import { HashLink as Link } from 'react-router-hash-link';

const LoginForm = () => {
    return (
        <>
            <form action="" className="login-form">
                <h3>Sign In</h3>
                <input type="email" name="email" placeholder="enter your email" id="" className="box" />
                <input type="password" name="password" placeholder="enter your password" id="" className="box" />
                <div className="remember">
                    <input type="checkbox" name="" id="remember-me" />
                    <label for="remember-me">remember me</label>
                </div>
                <input type="submit" value="sign in" className="btn btn-primary" />
                <div className="links">
                    <Link smooth to="#forgetpassword" className="link">forget password</Link>
                    <Link smooth to="Sign Up" className="link">Sign Up</Link>
                </div>
            </form>
        </>
    )
}

export default LoginForm
