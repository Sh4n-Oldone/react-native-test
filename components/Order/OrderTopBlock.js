import React from 'react'
import { View, Text } from 'react-native'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { diffDate } from '../../utils/sorters'
import moment from 'moment'
import 'moment/locale/ru'

export const OrderTopBlock = ({deliveries, packageName, packageCalories, nextDelivery, prevDelivery}) => {
  const today = new Date()
  const daysToEnd = deliveries.length > 0 
    ? diffDate(new Date(deliveries[deliveries.length - 1].date), today) >= 0 
      ? diffDate(new Date(deliveries[deliveries.length - 1].date), today)
      : 0
    : 0
  const daysAtStart = Math.abs(diffDate(new Date(deliveries[0].date), today))

  return(
    <>
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text 
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 17
          }}
        >
          {today < new Date(deliveries[deliveries.length-1].date)
            ? ['1'].includes(daysAtStart.toString().charAt(daysAtStart.toString().length-1)) && daysAtStart !== 11
              ? `${daysAtStart} день`
              : ['2','3','4'].includes(daysAtStart.toString().charAt(daysAtStart.toString().length-1))
                ? `${daysAtStart} дня`
                : `${daysAtStart} дней`
            : 'Окончен'
          }
        </Text>
        <View 
          style={{
            paddingRight: 22
          }}
        >
          <Text 
            style={{
              color: '#B1B1B1',
              fontSize: 10,
              fontWeight: 'bold',
              lineHeight: 16
            }}
          >{packageName}</Text>
          <Text 
            style={{
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >{packageCalories}</Text>
        </View>
      </View>

      <ProgressBar 
        step={deliveries.indexOf(nextDelivery) < 0 
          ? deliveries.length
          : deliveries.indexOf(prevDelivery) + 1
        } 
        steps={deliveries.length} 
        height={5.5}
      />

      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text>
          {moment(new Date(deliveries[0].date)).locale("ru").format('D MMM').replace('.', '')}
        </Text>
        <Text>
          {daysToEnd === 1 ? 'Остался ' : 'Осталось '}{daysToEnd}{['1','2','3','4'].includes(daysToEnd.toString().charAt(daysToEnd.toString().length-1)) && ![11,12,13,14].includes(daysToEnd)
            ? daysToEnd === 1 
              ? ' день'
              : ' дня'
            : ' дней'}
        </Text>
        <Text>
          {moment(new Date(deliveries[deliveries.length - 1].date)).locale("ru").format('D MMM').replace('.', '')}
        </Text>
      </View>
    </>
  )
}