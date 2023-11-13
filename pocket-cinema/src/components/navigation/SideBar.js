import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './navigation.css';
import { faHome, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Activity from '../Activity';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName) {
      case 'home':
        navigate('/home');
        break;
      case 'favorites':
        navigate('/favorites');
        break;
      case 'watchlater':
        navigate('/watchlater');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/activity');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <nav className={`sidebar ${small ? 'small' : ''}`}>
      <ul className="navigation">
        <li onClick={() => setPage('home')} className={selected === 'home' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </li>
        <li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </li>
        <li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'selected' : ''}>
          <FontAwesomeIcon icon={faClock} />
          <span>Watch Later</span>
        </li>
      </ul>

      {showActivities && (
        <ul className="activity-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activityText={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
