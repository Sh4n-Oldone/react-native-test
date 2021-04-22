import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PackageImg from './svg/PackageImg'
import ArrowImg from './svg/ArrowImg'
import moment from 'moment'
import 'moment/locale/ru'

export const OneDelivery = ({date, interval}) => {
  const normalizeDate = moment(new Date(date)).locale('ru').format('D MMMM, dddd')

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
        <PackageImg />
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
        <ArrowImg />
      </View>
    </TouchableOpacity>
  )
}