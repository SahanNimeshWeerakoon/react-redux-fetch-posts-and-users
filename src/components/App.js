import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsList from './PostsList'
import { fetchPosts } from '../actions'

class App extends Component {
    render() {
        return (
            <div className="app ui container">
                <PostsList />
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(App)