import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Animated } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { ProgressBar } from './ProgressBar'

const Order = ({orderObj, packageName, packageCalories, deliveries, navigation}) => {
  // Проблемы:
  // Даты корректно выглядят только на iOS
  // Пока не нашёл минималистичного решения для андроида =(

  // сортировки
  const diffDate = (oldDate, freshDate) => {
    // Вернёт разницу между двумя датами
    const utc1 = Date.UTC(freshDate.getFullYear(), freshDate.getMonth(), freshDate.getDate())
    const utc2 = Date.UTC(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate())
    const result = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))
    return result
  }
  
  const getDaysAfter = (arr, date) => arr.filter(day => day - date > 0)
  const getDaysBefore = (arr, date) => arr.filter(day => day - date < 0)
  const sortClosestDay = (arr, day) => arr.sort((a, b) => {
    // Вернёт масссив отсортированных дат
    const distancea = Math.abs(day - a)
    const distanceb = Math.abs(day - b)
    return distancea - distanceb
  })[0]

  // данные
  const today = new Date()
  const daysToEnd = deliveries.length > 0 
    ? diffDate(new Date(deliveries[deliveries.length - 1].date), today) >= 0 
      ? diffDate(new Date(deliveries[deliveries.length - 1].date), today)
      : 0
    : 0

  const daysAtStart = Math.abs(diffDate(new Date(deliveries[0].date), today))

  const deliveryDates = deliveries.map(item => new Date(item.date))
  const deliveryDatesAfter = getDaysAfter(deliveryDates, today)
  const deliveryDatesBefore = getDaysBefore(deliveryDates, today)

  const nextDeliveryDay = !deliveryDatesAfter.length ? '' : sortClosestDay(deliveryDatesAfter, today)
  const prevDeliveryDay = !deliveryDatesBefore.length ? '' : sortClosestDay(deliveryDatesBefore, today)
  const nextDelivery = !deliveryDatesAfter.length ? '' : deliveries.find(item => item.date === nextDeliveryDay.toISOString().slice(0, 10))
  const prevDelivery = !deliveryDatesBefore.length ? '' : deliveries.find(item => item.date === prevDeliveryDay.toISOString().slice(0, 10))
  const nextDeliveryProps = {
    day: !deliveryDatesAfter.length ? '' : nextDeliveryDay.toLocaleString("ru", {day: 'numeric'}),
    month: !deliveryDatesAfter.length ? '' : nextDeliveryDay.toLocaleString("ru", {month: 'short'}),
    dayOfTheWeek: !deliveryDatesAfter.length ? '' : nextDeliveryDay.toLocaleString("ru", {weekday: 'long'})
  }
  const prevDeliveryProps = {
    day: !deliveryDatesBefore.length ? '' : prevDeliveryDay.toLocaleString("ru", {day: 'numeric'}),
    month: !deliveryDatesBefore.length ? '' : prevDeliveryDay.toLocaleString("ru", {month: 'short'}).slice(0, -1),
    dayOfTheWeek: !deliveryDatesBefore.length ? '' : prevDeliveryDay.toLocaleString("ru", {weekday: 'long'})
  }  
  
  function handleClick() {
    // orderObj


    
    navigation.navigate('Screen_CurrentOrder')
  }

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

  return(
    <TouchableOpacity 
      style={styles.orderBlock}
      onPress={handleClick}
    >
      <View style={styles.topDataBlock}>
        <Text style={styles.topDataBlock__entryDays}>
          {today < new Date(deliveries[deliveries.length-1].date)
            ? ['1'].includes(daysAtStart.toString().charAt(daysAtStart.toString().length-1)) && daysAtStart !== 11
              ? `${daysAtStart} день`
              : ['2','3','4'].includes(daysAtStart.toString().charAt(daysAtStart.toString().length-1))
                ? `${daysAtStart} дня`
                : `${daysAtStart} дней`
            : 'Окончен'
          }
        </Text>
        <View style={styles.topDataBlock__package}>
          <Text style={styles.topDataBlock__packageName}>{packageName}</Text>
          <Text style={styles.topDataBlock__packageCalories}>{packageCalories}</Text>
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

      <View style={styles.progressDataBlock}>
        <Text>
          {new Date(deliveries[0].date).toLocaleString("ru", {day: 'numeric', month: 'short'})}
        </Text>
        <Text>
          {daysToEnd === 1 ? 'Остался ' : 'Осталось '}{daysToEnd}{['1','2','3','4'].includes(daysToEnd.toString().charAt(daysToEnd.toString().length-1)) && ![11,12,13,14].includes(daysToEnd)
            ? daysToEnd === 1 
              ? ' день'
              : ' дня'
            : ' дней'}
        </Text>
        <Text>
          {new Date(deliveries[deliveries.length - 1].date).toLocaleString("ru", {day: 'numeric', month: 'short'})}
        </Text>
      </View>

      { today < new Date(deliveries[deliveries.length-1].date) 
        ? <View style={styles.bottomDataBlock}>
            <View style={styles.bottomDataBlock__left}>
              <Text style={styles.bottomDataBlock__left_month}>{nextDeliveryProps.month}</Text>
              <Text style={styles.bottomDataBlock__left_day}>{nextDeliveryProps.day}</Text>
            </View>
            <View style={styles.bottomDataBlock__right}>
              <Text style={styles.bottomDataBlock__right_text}>Ближайшая доставка</Text>
              <Text style={styles.bottomDataBlock__right_textWeek}>
                {nextDeliveryProps.dayOfTheWeek === 'вторник' 
                  ? 'во ' 
                  : 'в '}
                {renameDayOfTheWeek(nextDeliveryProps.dayOfTheWeek)} –
              </Text>
              <Text style={styles.bottomDataBlock__right_interval}>{nextDelivery.interval}</Text>
              <Text style={styles.bottomDataBlock__right_address}>{nextDelivery.address}</Text>
            </View>
          </View>
        : <></>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  orderBlock: {
    backgroundColor: '#E3E3E3',
    borderRadius: 6,
    width: '100%',
    marginBottom: 15,
    paddingTop: 25,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 16
  },
  topDataBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  topDataBlock__entryDays: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  topDataBlock__package: {
    paddingRight: 22
  },
  topDataBlock__packageName: {
    color: '#B1B1B1',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 16
  },
  topDataBlock__packageCalories: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  progressDataBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomDataBlock: {
    flexDirection: 'row',
    marginTop: 23.26
  },
  bottomDataBlock__left: {
    marginRight: 20,
    backgroundColor: '#1E6FB9',
    height: 100,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  bottomDataBlock__left_month: {
    color: '#fff',
    fontSize: 11,
    textTransform: 'capitalize'
  },
  bottomDataBlock__left_day: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  bottomDataBlock__right: {
    maxWidth: 203
  },
  bottomDataBlock__right_text: {
    color: '#242424',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8
  },
  bottomDataBlock__right_textWeek: {
    color: '#1E6FB9',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8.86
  },
  bottomDataBlock__right_interval: {
    color: '#313131',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 3.32
  },
  bottomDataBlock__right_address: {
    color: '#949494',
    fontSize: 12
  }
})

const mapStateToProps = (state) => {
  return { 
    isLogged: state.userStatusReducer,
    user: state.userReducer,
    orders: state.ordersReducer
   }
}

export default connect(mapStateToProps)(Order)