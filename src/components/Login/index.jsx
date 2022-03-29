import React from 'react';
import './index.css'
import { Link} from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';


function Login() {
  

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value='' />

                    <h5>Password</h5>
                    <input type='password' value='' />

                    <button type='submit' className='login__signInButton' >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' >Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;