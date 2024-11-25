import React from 'react';


const ErrorMessage = ({ onRetry }) => {
  return (
    <div className="error-message">
      <p style={{ color: 'red' }}>Invalid username or password!</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
};

export default ErrorMessage;
