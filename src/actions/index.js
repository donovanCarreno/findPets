import axios from 'axios'
import jsonp from 'jsonp'
import data from '../../data'
import key from '../../key'

import {
  GET_PETS
} from './types'

const URL = 'http://api.petfinder.com'
const KEY = key

export const getPets = (animal, zipCode) => {
  return (dispatch) => {
    jsonp(`${URL}/pet.find?key=${KEY}&format=json&animal=${animal}&location=${zipCode}`, null, (err, data) => {
      dispatch({
        type: GET_PETS,
        payload: data.petfinder.pets.pet
      })
    })
  }
}
