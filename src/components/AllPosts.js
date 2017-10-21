import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../actions/index.js'
import IndividualPost from '../components/IndividualPost.js'

class AllPosts extends Component {
  componentDidMount() {
    this.props.getPosts()
    console.log('component', this.props.posts)
  }

  render() {
    return (
      <div>
        <h1> Inside ALL Posts Component </h1>
        <ul>
          {this.props.posts.map((post, index) => {
            return <IndividualPost post={post} i={index} key={index} />
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('redux state from component', state)
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPosts: getPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
