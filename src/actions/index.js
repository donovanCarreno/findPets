import axios from 'axios'
import jsonp from 'jsonp'

import {
  GET_PETS
} from './types'

const URL = 'http://api.petfinder.com'
const KEY = '5e5567cb4a7a2ce053f34fe56b5c1081'

export const getPets = () => {
  return (dispatch) => {
    jsonp(`${URL}/pet.find?key=${KEY}&format=json&animal=dog&location=75013`, null, (err, data) => {
      console.log('data', data.petfinder.pets.pet)
    })
  }
}
