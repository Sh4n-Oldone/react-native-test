import {combineReducers} from 'redux'
import {
  newUserData,
  removeUserData,
  newOrders,
  removeFromOrders,
  appendOrders,
  signIn,
  logOff,
  newCurrentOrder
} from '../actionTypes'

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case newUserData:
      return action.payload
    case removeUserData:
      return {}
    default:
      return user
  }
}

const ordersReducer = (orders = [], action) => {
  switch (action.type) {
    case newOrders:
      return action.payload
    case removeFromOrders:
      // удаляет элемент из массива
      return orders.filter(item => item !== action.payload)
    case appendOrders:
      return [...orders, action.payload]
    default:
      return orders
  }
}

const userStatusReducer = (status = 'logOff', action) => {
  switch (action.type) {
    case signIn:
      return action.payload
    case logOff:
      return action.payload
    default:
      return status
  }
}

const currentOrderReducer = (order = {}, action) => {
  switch (action.type) {
    case newCurrentOrder:
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