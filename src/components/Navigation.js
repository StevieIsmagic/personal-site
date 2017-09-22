import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

class Navigation extends Component {
  render() {
    return (
      <div> 
        <ul className="header">
          <div className='nav-bar'>
            <ul>
            <li><Link to="/posts"> All Posts </Link></li>
            <li><Link to="/about"> About Me </Link></li>
            <li><Link to="/contact"> Contact </Link></li>
            </ul>
          </div>
        </ul>
      </div>
    );
  };
};

// const mapStateToProps = (state) => {
//   return {
//     actionToBedetermined: state.actionToBedetermined
//   };
// };

export default Navigation;
//export default connect(mapStateToProps)(Navigation);
