import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/index.js';
import  IndividualPost from '../components/IndividualPost.js';

class AllPosts extends Component {
  
  componentWillMount(){
    this.props.getPosts()
  }

  render() {
    return (
      <div>
        <h1> Inside ALL Posts Component </h1>
        <ul>
          {Object.keys(this.props.posts).forEach((post, index) => {
            return (
              <IndividualPost post={post} i={index} />
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
 return {
   posts: state.posts
 };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPosts: getPosts}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
