import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

export const OneDelivery = ({date, interval}) => {
  const arrDate = new Date(date).toLocaleString("ru", { day: 'numeric', month: 'long', weekday: 'long' }).split(', ')
  const normalizeDate = arrDate[1] + ', ' + arrDate[0]

  function handleClick() {

  }

  return(
    <TouchableOpacity 
      style={{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 11.13,
        marginTop: 8.85
      }}
      onPress={handleClick}
    >
      <View
        style={{ 
          alignItems: 'center', 
          flexDirection: 'row' 
        }}
      >
        <Image 
          style={{
            height: 41, 
            width: 30
          }}
          source={require('../../assets/package.png')}
        />
        <Text
          style={{ 
            marginLeft: 11, 
            fontSize: 14 
          }}
        >{normalizeDate}</Text>
      </View>
      <View 
        style={{ alignItems: 'center', flexDirection: 'row' }}
      >
        <Text
          style={{ 
            marginRight: 36, 
            fontSize: 14
          }}
        >{interval}</Text>
        <Image 
          source={require('../../assets/Arrow.png')}
        />
      </View>
    </TouchableOpacity>
  )
}