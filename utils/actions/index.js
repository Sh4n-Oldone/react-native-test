import { ACTIONS } from '../actionTypes'

export const saveUser = value => {
  return {
    type: ACTIONS.NEW_USER_DATA,
    payload: value
  }
}

export const dropUser = () => {
  return {
    type: ACTIONS.REMOVE_USER_DATA
  }
}

export const saveOrders = value => {
  return {
    type: ACTIONS.NEW_ORDERS,
    payload: value
  }
}

export const removeOrder = value => {
  return {
    type: ACTIONS.REMOVE_FROM_ORDERS,
    payload: value
  }
}

export const addOrder = value => {
  return {
    type: ACTIONS.APPEND_ORDERS,
    payload: value
  }
}

export const login = () => {
  return {
    type: ACTIONS.SIGN_IN,
    payload: 'logIn'
  }
}

export const logoff = () => {
  return {
    type: ACTIONS.LOG_OFF,
    payload: 'logOff'
  }
}

export const currOrder = value => {
  return {
    type: ACTIONS.NEW_CURRENT_ORDER,
    payload: value
  }
}