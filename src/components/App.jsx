import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.getPets()
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default connect(null, actions)(App)
