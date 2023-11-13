import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './navigation.css'; 
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    // Remove the accessToken item from localStorage
    localStorage.removeItem('accessToken');
    // Set isLoggedIn state to false
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <Image src="https://picsum.photos/100/100" roundedCircle alt="User Avatar" />
      <p>Welcome, {userUsername}</p>
      <span onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logout
      </span>
    </nav>
  );
};

export default Header;
