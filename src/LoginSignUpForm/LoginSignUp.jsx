import React, { useState } from "react";
import "./LoginSignUp.css";

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true); // State to determine if it's login or signup

  const switchForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="container">
      <form className="form">
        <header>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        </header>
        <div className="inputs">
          <div className="input-mail">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-password">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
          <p>
            Forgot Password <span>Click here !!</span>
          </p>
        </div>

        <div className="submit-buttons">
          {/* Toggle between login and signup */}
          {isLogin ? (
            <>
              <button>{isLogin ? "Login" : "Sign Up"}</button>
              <p>
                Don't have an account? <span onClick={switchForm}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button>{isLogin ? "Login" : "Sign Up"}</button>
              <p>
                Already have an account? <span onClick={switchForm}>Login</span>
              </p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginSignUp;
