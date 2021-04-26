import {combineReducers} from 'redux'
import { ACTIONS } from '../actionTypes'

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case ACTIONS.NEW_USER_DATA:
      return action.payload
    case ACTIONS.REMOVE_USER_DATA:
      return {}
    default:
      return user
  }
}

const ordersReducer = (orders = [], action) => {
  switch (action.type) {
    case ACTIONS.NEW_ORDERS:
      return action.payload
    case ACTIONS.REMOVE_FROM_ORDERS:
      return orders.filter(item => item !== action.payload)
    case ACTIONS.APPEND_ORDERS:
      return [...orders, action.payload]
    default:
      return orders
  }
}

const userStatusReducer = (status = 'logOff', action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN:
      return action.payload
    case ACTIONS.LOG_OFF:
      return action.payload
    default:
      return status
  }
}

const currentOrderReducer = (order = {}, action) => {
  switch (action.type) {
    case ACTIONS.NEW_CURRENT_ORDER:
      return action.payload
    default:
      return order
  }
}


const reducers = combineReducers({
  userReducer,
  ordersReducer,
  userStatusReducer,
  currentOrderReducer
})

export default reducers