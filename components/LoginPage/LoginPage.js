import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { login, logoff, saveUser, dropUser, saveOrders } from '../../utils/actions'

function LoginPage({navigation}) {
  const dispatch = useDispatch()

  const [loginHandler, setLoginHandler] = useState('')
  const [passwordHandler, setPasswordHandler] = useState('')

  const handleEnterClick = () => {
    // здесь на самом деле метод из Api.js, который обращается к базе
    // а дальше в then вносятся изменения
    const data = require('../../utils/clients.json') 
    const orders = require('../../utils/orders.json')
    const currentUser = data.find(user => user.login === loginHandler.toLowerCase() && user.password === passwordHandler.toLowerCase())
    
    if(currentUser) {
      const userOrders = orders.filter(order => order.client_id === currentUser.id)
        ? orders.filter(order => order.client_id === currentUser.id) 
        : [{
          'id': 0,
          'client_id': currentUser.id,
          'packageName': 'Нет заказов',
          'packageCalories': '',
          'deliveries': [
              {
                'id': 0,
                'date': '',
                'interval': '',
                'address': ''
              }
            ]
          }]
      dispatch(login())
      dispatch(saveUser(currentUser))
      dispatch(saveOrders(userOrders))
      navigation.navigate('Screen_UserOrders')
    } else {
      dispatch(logoff())
      dispatch(dropUser())
    }
  }

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.text}
      >Добро пожаловать!</Text>
      <TextInput 
        style={styles.inputs}
        onChangeText={setLoginHandler}
        placeholder='Логин'
        placeholderTextColor='#000'
      />
      <TextInput 
        style={styles.inputs}
        onChangeText={setPasswordHandler}
        placeholder='Пароль'
        placeholderTextColor='#000'
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleEnterClick}
      >
        <Text
          style={styles.buttonText}
        >Войти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 45
  },
  inputs: {
    borderWidth: 2,
    borderColor: '#1E6FB9',
    borderRadius: 6,
    width: '90%',
    height: 56,
    marginBottom: 12,
    fontSize: 18,
    paddingLeft: 11
  },
  button: {
    borderRadius: 6,
    width: '90%',
    backgroundColor: '#1E6FB9',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 39
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
  return { 

   }
}

export default connect(mapStateToProps)(LoginPage)