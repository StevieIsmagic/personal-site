import React from 'react';

var ulStyle = {
  background: "#eee",
  padding: "30px",
  border: '10px solid black',
  borderRadius: '5%',
  margin: "20px",
  listStyle: "none",
  
}; 

class Portfolio extends React.Component{
	render() {
		return (
			<div>
				<div className="flex layout-column layout-align-space-between" style={ulStyle}>
					<div className="flex layout-row layout-align-space-between">
						<div className="blue-box" style={ulStyle}>1</div>
						<div className="blue-box" style={ulStyle}>2</div>
						<div className="blue-box" style={ulStyle}>3</div>
					</div>
					<div className="flex layout-row layout-align-space-around-center">
						<div className="blue-box" style={ulStyle}>1</div>
						<div className="blue-box" style={ulStyle}>2</div>
						<div className="blue-box" style={ulStyle}>3</div>
					</div>
					<div className="flex layout-row layout-align-start-center">
						<div className="blue-box" style={ulStyle}>1</div>
						<div className="blue-box" style={ulStyle}>2</div>
						<div className="blue-box" style={ulStyle}>3</div>
					</div>
					<div className="flex layout-row layout-align-end-center">
						<div className="blue-box" style={ulStyle}>1</div>
						<div className="blue-box" style={ulStyle}>2</div>
						<div className="blue-box" style={ulStyle}>3</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Portfolio;