import React from 'react';
// import './auth.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="login-container">
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="login-button">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;


// import React from 'react';
// import './auth.css';


// const Login = ({ username, password, setUsername, setPassword }) => {
//   return (
//     <div className="login-container">
//       <input
//         type="text"
//         placeholder="Username:"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password:"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <div class="login-button">
//         <button type="submit">Sign In</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
