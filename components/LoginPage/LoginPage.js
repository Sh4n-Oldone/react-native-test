import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleEnterClick = () => {
    console.log(login)
    console.log(password)
  }

  return (
    <View style={styles.wrapper}>
      <Text
        style={styles.text}
      >Добро пожаловать!</Text>
      <TextInput 
        style={styles.inputs}
        onChangeText={setLogin}
        placeholder='Логин'
        placeholderTextColor='#000'
      />
      <TextInput 
        style={styles.inputs}
        onChangeText={setPassword}
        placeholder='Пароль'
        placeholderTextColor='#000'
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