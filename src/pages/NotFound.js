// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link from react-router-dom to navigate

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
