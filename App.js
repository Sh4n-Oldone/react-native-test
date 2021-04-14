import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LoginPage } from './components/LoginPage/LoginPage'

export default function App() {

  return (
    <View style={styles.container}>
      <LoginPage />

      <StatusBar style="auto" />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
