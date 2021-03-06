import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

var ulStyle = {
  background: "#eee",
  padding: "30px",
  border: '10px solid black',
  borderRadius: '5%',
  margin: "20px",
  listStyle: "none",
  
};
const liStyle = {
  display:'inline',
  padding: "30px",
}

class Navigation extends Component {
  render() {
    return (
      <div> 
        
          <div>
            <ul style={ulStyle}>
            <li style={liStyle}><Link to="/home"> Home </Link></li>
            <li style={liStyle}><Link to="/about"> About Me </Link></li>
            <li style={liStyle}><Link to="/portfolio"> Portfolio </Link></li>
            <li style={liStyle}><Link to="/posts"> Blog Posts </Link></li>
            </ul>
          </div>
        
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
