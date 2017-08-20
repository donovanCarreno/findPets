import axios from 'axios'
import jsonp from 'jsonp'
import data from '../../data'
import KEY from '../../key'

import {
  GET_PETS
} from './types'

const URL = 'http://api.petfinder.com'
const KEY = KEY

export const getPets = () => {
  return (dispatch) => {
    // jsonp(`${URL}/pet.find?key=${KEY}&format=json&animal=dog&location=75013`, null, (err, data) => {
      dispatch({
        type: GET_PETS,
        // payload: data.petfinder.pets.pet
        payload: data.petfinder.pets.pet
      })
    // })
  }
}
