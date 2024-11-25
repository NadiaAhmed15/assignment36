import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import ErrorMessage from "./ErrorMessage";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  // Handle login logic
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if (username === "user" && password === "user") {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };

  // Retry login on error
  const retryLogin = () => setShowError(false);

  return (
    <div>
      {!isLoggedIn && !showError && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage onRetry={retryLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;
