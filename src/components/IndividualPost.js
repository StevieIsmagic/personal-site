import React, { Component } from 'react';

class IndividualPost extends Component {
  render() {
    return (
      <div>
        <h4>{`Title: ${this.props.post.title}`}</h4>
        <h4>{`Content: ${this.props.post.content}`}</h4>
      </div>
    );
  }
}

export default IndividualPost;