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

const InputContainer = styled.div`
  margin: 10px;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      animal: 'dog',
      zipCode: '75013',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { animal, zipCode } = this.state
    this.props.getPets(animal, zipCode)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { animal, zipCode } = this.state
    this.props.getPets(animal, zipCode)
  }

  render() {
    const { all } = this.props.pets
    const { animal, zipCode } = this.state
    return (
      <div>
        <Container>
          <InputContainer>
            <form onSubmit={this.handleSubmit}>
              <select name='animal' value={animal} onChange={this.handleChange}>
                <option value='dog'>dog</option>
                <option value='cat'>cat</option>
              </select>
              <input type='text' name='zipCode' value={zipCode} onChange={this.handleChange}/>
              <button>submit</button>
            </form>
          </InputContainer>
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
