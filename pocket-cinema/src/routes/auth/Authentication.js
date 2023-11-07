import React, { useState } from 'react';
// import './auth.css';
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
            variant={switchState ? "primary" : "light"}
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
            variant={!switchState ? "primary" : "light"}
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


// import React, { useState } from 'react';
// import './auth.css';
// import axios from 'axios';
// import Login from './Login';
// import Register from './Register';


// const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
//   const [switchState, setSwitchState] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignInClick = () => {
//     setSwitchState(true);
//   };

//   const handleSignUpClick = () => {
//     setSwitchState(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (switchState) {
//         // Logging in
//         const response = await axios.post('/api/auth/login', {
//           username,
//           password,
//         });

//         // Store the token in localStorage
//         localStorage.setItem('accessToken', response.data.accessToken);

//         // Set userUsername and isLoggedIn state
//         setUserUsername(username);
//         setIsLoggedIn(true);
//       } else {
//         // Registering
//         const response = await axios.post('/api/auth/register', {
//           username,
//           password,
//         });

//         // Store the token in localStorage
//         localStorage.setItem('accessToken', response.data.accessToken);

//         // Set userUsername and isLoggedIn state
//         setUserUsername(username);
//         setIsLoggedIn(true);
//       }
//     } catch (error) {
//       console.error('Authentication error:', error);
//       // Handle any error or validation logic here
//     }
//   };

//   return (
//     <div className="auth-container" >
//       <div className="button-signin">
//         <button
//           className={switchState ? "active" : ""}
//           onClick={handleSignInClick}
//         >
//           Sign In
//         </button>
//       </div>
//       <div className="button-signup">
//         <button
//           className={switchState ? "" : "active"}
//           onClick={handleSignUpClick}
//         >
//           Sign Up
//         </button>
//       </div>
//       <div className="auth-form">
//         {switchState ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
//         <button onClick={handleSubmit} type="submit">
//           {switchState ? "Sign In" : "Register"}
//         </button>
//       </div>  
//     </div>
//   );
// };

// export default Authentication;
