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

export const saveUser = value => {
  return {
    type: newUserData,
    payload: value
  }
}

export const dropUser = () => {
  return {
    type: removeUserData
  }
}

export const saveOrders = value => {
  return {
    type: newOrders,
    payload: value
  }
}

export const removeOrder = value => {
  return {
    type: removeFromOrders,
    payload: value
  }
}

export const addOrder = value => {
  return {
    type: appendOrders,
    payload: value
  }
}

export const login = () => {
  return {
    type: signIn,
    payload: 'logIn'
  }
}

export const logoff = () => {
  return {
    type: logOff,
    payload: 'logOff'
  }
}

export const currOrder = value => {
  return {
    type: newCurrentOrder,
    payload: value
  }
}