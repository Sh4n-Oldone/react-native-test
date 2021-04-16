import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'

const CurrentOrder = ({navigation}) => {

  function handleBackClick() {
    navigation.navigate('Screen_UserOrders')
  }

  return (
    <View style={styles.orderWrapper}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={handleBackClick}
      >
        <Text
          style={styles.backButton__text}
        >Назад</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  orderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 50
  },
  backButton: {
    marginRight: 'auto'
  },
  backButton__text: {
    color: '#1E6FB9',
    fontSize: 17,

  }

})

const mapStateToProps = (state) => {
  return { 
    
   }
}

export default connect(mapStateToProps)(CurrentOrder)