import React from 'react'
import './styles.scss';
import { HashLink as Link } from 'react-router-hash-link';

const SignupPage = () => {
    return (
        <div className="form_box">
            <form action="" className="login-form">
                <h3>Sign Up</h3>
                <input type="email" name="email" placeholder="enter your email" id="" className="box" />
                <input type="password" name="password" placeholder="enter your password" id="" className="box" />
                <input type="password" name="confirmpassword" placeholder="enter your password again" id="" className="box" />
                <input type="submit" value="sign up" className="btn btn-primary" />
                <div className="links">
                    <Link smooth to="#forgetpassword" className="link">Already have account?</Link>
                    <Link smooth to="/signin" className="link">Sign In</Link>
                </div>
            </form>
        </div>
    )
}

export default SignupPage
