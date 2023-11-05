import React from 'react';
import './auth.css';


const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="register-container">
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
      <button type="submit">Register</button>
    </div>
  );
};

export default Register;
