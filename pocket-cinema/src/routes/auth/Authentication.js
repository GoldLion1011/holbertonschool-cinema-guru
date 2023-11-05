import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';


const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchState, setSwitchState] = useState(true);

  const handleSignInClick = () => {
    setSwitchState(true);
  };

  const handleSignUpClick = () => {
    setSwitchState(false);
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
      {switchState ? <Login /> : <Register />}
    </div>
  );
};

export default Authentication;
