// Login1.jsx
import React from 'react';
import './Login1.css'; // Make sure to import your CSS file for styling

const Login1 = () => {
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="User name / Email" required />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" required />
                        </div>
                        <button type="submit" className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>                
                    </form>
                    <div className="social-login">
                        <h3>Log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>        
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>        
            </div>
        </div>
    );
};

export default Login1;
