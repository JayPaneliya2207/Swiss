import React from "react";
import "./css/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-row">
        <div className="login-card">
          <h1 className="login-title">Welcome To Admin</h1>
          <div className="account-wall">
            <img
              className="profile-img"
              src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
              alt="Profile"
            />
            <form className="login-form form-signin">
              <input
                type="email"
                className="form-control input-field input-section"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="form-control input-field input-section"
                placeholder="Password"
                required
              />
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block login-button-background"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
