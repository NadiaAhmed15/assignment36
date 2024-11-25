import React from 'react';


const UserDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, User!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
