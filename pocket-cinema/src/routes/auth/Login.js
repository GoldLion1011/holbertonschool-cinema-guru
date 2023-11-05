import React from 'react';
import './auth.css';


const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
