import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './general.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = ({ label, className, onClick, icon }) => {
  return (
    <button
      type="button"
      className={`custom-button button ${className}`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}&nbsp;{label}
    </button>
  );
};

export default CustomButton;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import './general.css';

// const CustomButton = ({ label, className, onClick, icon }) => {
//   return (
//     <Button type="button" class="btn btn-custom active btn-sm" data-bs-toggle="button" autocomplete="off" className={`button ${className}`} onClick={onClick}>
//       {icon && <FontAwesomeIcon icon={icon} />}&nbsp;{label}
//     </Button>
//   );
// };

// export default CustomButton;
