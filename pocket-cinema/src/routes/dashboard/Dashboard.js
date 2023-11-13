import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* Add other content specific to your dashboard */}
    </div>
  );
};

export default Dashboard;
