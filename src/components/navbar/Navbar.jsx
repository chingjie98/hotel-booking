import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="logo">
            AIRBNB
          </div>
          <div className="navButtons">
            <button className = 'navbarButton'>LOGIN</button>
            <button className = 'navbarButton'>REGISTER</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar