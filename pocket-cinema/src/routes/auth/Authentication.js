import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
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
      <Tabs defaultActiveKey="signin" id="auth-tabs">
        <Tab eventKey="signin" title="Sign In">
          <Button
            className="switch-button"
            variant="primary"
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          {switchState && (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <Button
            className="switch-button"
            variant="primary"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
          {!switchState && (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </Tab>
      </Tabs>
      <Button
        className="submit-button"
        variant="primary"
        onClick={handleSubmit}
        type="submit"
      >
        {switchState ? "Sign In" : "Register"}
      </Button>
    </div>
  );
};

export default Authentication;
