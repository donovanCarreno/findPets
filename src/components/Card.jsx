import React, { Component } from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  width: 49%;
  padding: 5px;
  background-color: #DAF7A6;
  margin: 1px;
`

const Image = styled.img`
  float: left;
  height: 150px;
  width: 150px;
  margin-right: 10px;
  border-radius: 30px;
`

export default class Card extends Component {
  findImage(images) {
    for (let i = 0; i < images.length; i++) {
      if (images[i]['@size'] === 'pn') {
        return images[i]['$t']
      }
    }
  }

  render() {
    const { pet } = this.props
    return (
      <Wrapper>
        <Image className='pet-image' src={this.findImage(pet.media.photos.photo)} />
        <Truncate
          lines={4}
          ellipsis={<span>... Read More</span>}
        >
          {pet.description['$t']}
        </Truncate>
      </Wrapper>
    )
  }
}
