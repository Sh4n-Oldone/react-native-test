import React from 'react'
import { View, Text } from 'react-native'

export default function LeftBlock({nextDeliveryProps}) {

  return (
    <View 
      style={{
        marginRight: 20,
        backgroundColor: '#1E6FB9',
        height: 100,
        width: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 11,
          textTransform: 'capitalize'
        }}
      >
        {nextDeliveryProps.month}
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        {nextDeliveryProps.day}
      </Text>
    </View>
  )
}