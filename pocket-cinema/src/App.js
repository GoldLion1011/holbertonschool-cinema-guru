import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Add state using useState hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    // Get the value of accessToken from localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Check if there's an accessToken
    if (accessToken) {
      // Send a post request to /api/auth/ with the authorization header
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then((response) => {
          // Check if the request was successful
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Authentication failed');
          }
        })
        .then((data) => {
          // Set the isLoggedIn state to true and userUsername from the response
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch((error) => {
          console.error('Authentication error:', error);
        });
    }
  }, []);

  // Render different components based on the isLoggedIn state
  return isLoggedIn ? <Dashboard username={userUsername} /> : <Authentication />;
}

export default App;
