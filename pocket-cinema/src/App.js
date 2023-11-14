import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import 'normalize.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios ({
        method: 'POST',
        url: 'localhost:8000/api/auth/',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Invalid token');
          }
        })
        .then((data) => {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch((error) => {
          console.error('Authentication error:', error);
        });
    }
  }, []);

  return (
    <Container className='container-fluid bg-dark text-white'>
      <Card className='container-lg col-4 d-flex justify-content-center'>
        <Card.Body>
          {isLoggedIn ? (
            <p>Welcome, {userUsername}!</p>
          ) : (
            <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Authentication from './routes/auth/Authentication';

// function App() {
//   // Add state using useState hook
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userUsername, setUserUsername] = useState("");

//   useEffect(() => {
//     // Get the value of accessToken from localStorage
//     const accessToken = localStorage.getItem('accessToken');

//     // Check if there's an accessToken
//     if (accessToken) {
//       // Send a post request to /api/auth/ with the authorization header
//       fetch('/api/auth/', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       })
//         .then((response) => {
//           // Check if the request was successful
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error('Authentication failed');
//           }
//         })
//         .then((data) => {
//           // Set the isLoggedIn state to true and userUsername from the response
//           setIsLoggedIn(true);
//           setUserUsername(data.username);
//         })
//         .catch((error) => {
//           console.error('Authentication error:', error);
//         });
//     }
//   }, []);

//   // Render different components based on the isLoggedIn state
//   // return isLoggedIn ? <Dashboard username={userUsername} /> : <Authentication />;
//   return <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />;
// }

// export default App;
