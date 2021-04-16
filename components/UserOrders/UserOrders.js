import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Order from '../Order/Order'

const UserOrders = ({orders, navigation}) => {

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        <Text style={styles.header}>Мои заказы
          <Text style={styles.headerNums}> {orders.length}</Text>
        </Text>
        {orders.map(item => 
          <Order
            key={item.id}
            orderObj={item}
            packageName={item.packageName}
            packageCalories={item.packageCalories}
            deliveries={item.deliveries}
            navigation={navigation}
          />
          )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: '90%',
    minHeight: '100%'
  },
  header: {
    color: '#252525',
    fontSize: 22,
    letterSpacing: 0.3,
    fontWeight: 'bold',
    marginTop: 50,
    lineHeight: 26,
    marginRight: 'auto',
    marginBottom: 11
  },
  headerNums: {
    color: '#929292',
    fontWeight: 'normal',
    fontSize: 20
  }
})

const mapStateToProps = (state) => {
  return { 
    isLogged: state.userStatusReducer,
    user: state.userReducer,
    orders: state.ordersReducer
   }
}

export default connect(mapStateToProps)(UserOrders)