import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.css';
import { Button, Tabs, Tab } from 'react-bootstrap';
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
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          username,
          password,
        });

        localStorage.setItem('accessToken', response.data.accessToken);

        setUserUsername(username);
        setIsLoggedIn(true);
      } else {
        const response = await axios.post('http://localhost:8000/api/auth/register', {
          username,
          password,
        });

        localStorage.setItem('accessToken', response.data.accessToken);

        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div>
      <Tabs defaultActiveKey="signin" id="auth-tabs">
        <Tab eventKey="signin" title="Sign In">
          <Button
            className="switch-button btn-primary "
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
