import {
  GET_PETS
} from '../actions/types'

const INITIAL_STATE = {
  all: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PETS:
      return Object.assign({}, state, { all: action.payload })

    default:
      return state
  }
}
