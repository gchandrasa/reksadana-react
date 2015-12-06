import { combineReducers } from 'redux'
import { REQUEST_MUTUALFUND_LIST, RECEIVE_MUTUALFUND_LIST } from '../actions/index'

const mutualfunds = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch(action.type) {
    case REQUEST_MUTUALFUND_LIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MUTUALFUND_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.mutualfunds
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ mutualfunds })
export default rootReducer
