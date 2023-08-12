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
            <button>LOGIN</button>
            <button>REGISTER</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar