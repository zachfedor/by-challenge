import React from 'react';
import './Alert.css';


const Alert = ({ msg }) => {
  const className = !msg ? 'Alert' : 'Alert active';

  return (
    <div className={className}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
