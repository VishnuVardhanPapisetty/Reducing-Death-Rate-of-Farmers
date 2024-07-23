import React, { useState } from 'react';
import "../styles/Login.css";
import BaseHOC from '../layouts/BaseHOC';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);  
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default BaseHOC(Login);