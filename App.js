import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './utils/reducers'
import LoginPage from './screens/LoginPage/LoginPage'
import UserOrders from './screens/UserOrders/UserOrders'
import CurrentOrder from './screens/CurrentOrder/CurrentOrder'

const Stack = createStackNavigator()
const store = createStore(reducers)

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen 
              name='Screen_LogIn'
              component={LoginPage}
              headerMode='none'
            />
            <Stack.Screen 
              name='Screen_UserOrders'
              component={UserOrders}
            />
            <Stack.Screen 
              name='Screen_CurrentOrder'
              component={CurrentOrder}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})