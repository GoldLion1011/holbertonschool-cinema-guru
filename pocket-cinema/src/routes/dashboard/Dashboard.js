import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <Router>
      <div className="dashboard-container">     
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        {/* other dashboard components */}
      </div>
    </Router>
  );
};

export default Dashboard;
