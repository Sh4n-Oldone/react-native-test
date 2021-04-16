export const saveUser = value => {
  return {
    type: 'NEW_USER_DATA',
    payload: value
  }
}

export const dropUser = () => {
  return {
    type: 'DROP_USER_DATA'
  }
}

export const saveOrders = value => {
  return {
    type: 'NEW_ORDERS_DATA',
    payload: value
  }
}

export const appendOrders = value => {
  return {
    type: 'APPENDS_ORDERS_DATA',
    payload: value
  }
}

export const removeOrder = value => {
  return {
    type: 'REMOVE_FROM_ORDERS_DATA',
    payload: value
  }
}

export const addOrder = value => {
  return {
    type: 'ADD_NEW_ORDER_TO_ORDERS_DATA',
    payload: value
  }
}

export const login = () => {
  return {
    type: 'USER_LOG_IN',
    payload: 'logIn'
  }
}

export const logoff = () => {
  return {
    type: 'USER_LOG_OFF',
    payload: 'logOff'
  }
}