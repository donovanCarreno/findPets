import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

// Views
import Card from './Card'

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`

class App extends Component {
  componentDidMount() {
    this.props.getPets()
  }

  render() {
    const { all } = this.props.pets

    return (
      <div>
        <Container>
          { all.map(pet => <Card key={pet.id['$t']} pet={pet} />) }
        </Container>
      </div>
    )
  }
}

function mapStateToProps({pets}) {
  return { pets }
}

export default connect(mapStateToProps, actions)(App)
