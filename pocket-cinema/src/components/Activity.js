import React from 'react';
// import './components.css';

const Activity = ({ activityText }) => {
  return (
    <li className="activity-item">
      <p>{activityText}</p>
      {/* Add other content or styling specific to your activity item */}
    </li>
  );
};

export default Activity;
