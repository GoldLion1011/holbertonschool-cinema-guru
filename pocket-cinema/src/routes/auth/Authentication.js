import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';


const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchState, setSwitchState] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    setSwitchState(true);
  };

  const handleSignUpClick = () => {
    setSwitchState(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (switchState) {
        // Logging in
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        });

        // Store the token in localStorage
        localStorage.setItem('accessToken', response.data.accessToken);

        // Set userUsername and isLoggedIn state
        setUserUsername(username);
        setIsLoggedIn(true);
      } else {
        // Registering
        const response = await axios.post('/api/auth/register', {
          username,
          password,
        });

        // Store the token in localStorage
        localStorage.setItem('accessToken', response.data.accessToken);

        // Set userUsername and isLoggedIn state
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle any error or validation logic here
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button
          className={switchState ? "active" : ""}
          onClick={handleSignInClick}
        >
          Sign In
        </button>
        <button
          className={switchState ? "" : "active"}
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>
      {switchState ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
      <button onClick={handleSubmit} type="submit">
        {switchState ? "Sign In" : "Register"}
      </button>
    </div>
  );
};

export default Authentication;
