import React from 'react';
import profileImage from './sk.jpg';


const Header = () => {
  return (
    <header>
      <img src={profileImage} alt="Profile" style={{width : '400px'}} /> {/* Add a class for styling */}
      <h1>Athish Pranav R</h1>
      <p>Fullstack Developer</p>
    </header>
  );
}

export default Header;