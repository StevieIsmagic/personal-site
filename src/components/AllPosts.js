import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from './actions/index.js';
import  IndividualPost from './components/IndividualPost.js';

class AllPosts extends Component {
  componentDidMount(){
    this.props.getFriends() // where does getFriends() come from. Is this its first instantiation ?
  }
  render() {
    return (
      <h1> Inside ALL Posts Component </h1>
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

export default AllPosts;
export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
