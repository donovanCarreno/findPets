import { combineReducers } from 'redux'
import PetsReducer from './PetsReducer'

export default combineReducers({
  pets: PetsReducer
})
