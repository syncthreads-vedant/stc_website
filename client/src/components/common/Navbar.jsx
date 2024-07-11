import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
