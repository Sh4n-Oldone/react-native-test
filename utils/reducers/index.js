import {combineReducers} from 'redux'

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case 'NEW_USER_DATA':
      return action.payload
    case 'DROP_USER_DATA':
      return {}
    default:
      return user
  }
}

const ordersReducer = (orders = [], action) => {
  switch (action.type) {
    case 'NEW_ORDERS_DATA':
      return action.payload
    case 'REMOVE_FROM_ORDERS_DATA':
      // удаляет элемент из массива
      return orders.filter(item => item !== action.payload)
    case 'ADD_NEW_ORDER_TO_ORDERS_DATA':
      return orders.append(action.payload)
    default:
      return orders
  }
}

const userStatusReducer = (status = 'logOff', action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return action.payload
    case 'USER_LOG_OFF':
      return action.payload
    default:
      return status
  }
}

const currentOrderReducer = (order = {}, action) => {
  switch (action.type) {
    case 'NEW_CURRENT_ORDER':
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