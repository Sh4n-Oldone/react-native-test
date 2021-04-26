import React from 'react'
import { View, Text } from 'react-native'

export default function RightBlock({nextDeliveryProps, nextDelivery}) {
  const prefixDayWTueFix = nextDeliveryProps.fullDayOfTheWeek === 'вторник' ? 'во ' : 'в '
  function renameDayOfTheWeek(day) {
    return ['понедельник', 'вторник', 'четверг', 'воскресенье'].includes(day)
    ? day
    : day === 'среда'
      ? 'среду'
      : day === 'пятница'
        ? 'пятницу'
        : day === 'суббота'
          ? 'субботу'
          : day
  }
  
  return (
    <View
      style={{
        maxWidth: 203
      }}
    >
      <Text
        style={{
          color: '#242424',
          fontSize: 17,
          fontWeight: 'bold',
          marginTop: 8
        }}
      >
        Ближайшая доставка
      </Text>
      <Text
        style={{
          color: '#1E6FB9',
          fontSize: 17,
          fontWeight: 'bold',
          marginBottom: 8.86
        }}
      >
        {prefixDayWTueFix}
        {renameDayOfTheWeek(nextDeliveryProps.fullDayOfTheWeek)} –
      </Text>
      <Text
        style={{
          color: '#313131',
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 3.32
        }}
      >
        {nextDelivery.interval}
      </Text>
      <Text
        style={{
          color: '#949494',
          fontSize: 12
        }}
      >
        {nextDelivery.address}
      </Text>
    </View>
  )
}