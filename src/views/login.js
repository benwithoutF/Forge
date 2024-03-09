import React from 'react';
import { Helmet } from 'react-helmet';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Forge</title>
        <meta property="og:title" content="Login - Forge" />
      </Helmet>
      <div className="login-header">
        <h1 className="login-heading">Sign In to Forge</h1>
      </div>
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit" className="buttonFilled">Sign In</button>
          </div>
        </form>
      </div>
      <div className="login-footer">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
