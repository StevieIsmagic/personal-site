import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div> 
      <ul className="header">
        <div className='nav-bar'>
          <button><li><Link to="/posts"> All Posts </Link></li></button>
          <button><li><Link to="/about"> About Me </Link></li></button>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;