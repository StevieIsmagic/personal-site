import React from 'react';

var ulStyle = {
  background: "#eee",
  padding: "30px",
  border: '2px solid black',
  borderRadius: '10%',
  margin: "20px",
  listStyle: "none",
  
}; 

class Portfolio extends React.Component{
	render() {
		return (
			<div>
				<div className="flex layout-column layout-align-space-between" style={ulStyle}>
					<div className="flex layout-row layout-align-space-between">
						<div className="blue-box" style={ulStyle}>Project 1</div>
						<div className="blue-box" style={ulStyle}>Project 2</div>
						<div className="blue-box" style={ulStyle}>Project 3</div>
					</div>
					<div className="flex layout-row layout-align-space-around-center">
						<div className="blue-box" style={ulStyle}>Project 4</div>
						<div className="blue-box" style={ulStyle}>Project 5</div>
						<div className="blue-box" style={ulStyle}>Project 6</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Portfolio;