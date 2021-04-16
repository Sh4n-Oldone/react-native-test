import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

const ProgressBar = ({step, steps, height}) => {
  const [width, setWidth] = useState(0)
  const animValue = useRef(new Animated.Value(-1000)).current
  const reactive = useRef(new Animated.Value(-1000)).current
  

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [])

  useEffect(() => {
    reactive.setValue(-width + width * step / steps)
  }, [step, width])

  return(
    <View 
      onLayout={e => {
        const newWidth = e.nativeEvent.layout.width
        setWidth(newWidth)
      }}
      style={{
        height,
        backgroundColor: '#1E6FB9',
        borderRadius: height,
        overflow: 'hidden'
      }}
    >
      <Animated.View 
        style={{
          height,
          width: '100%',
          backgroundColor: '#FFC0CB',
          borderRadius: height,
          position: 'absolute',
          left: 0,
          top: 0,
          transform: [{
            translateX: animValue
          }]
        }}
      />
    </View>
  )
}

const Order = ({packageName, packageCalories, deliveries}) => {
  // сортировки
  const diffDate = (oldDate, freshDate) => {
    // Вернёт разницу между двумя датами
    const utc1 = Date.UTC(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate())
    const utc2 = Date.UTC(freshDate.getFullYear(), freshDate.getMonth(), freshDate.getDate())
    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))
  }
  const getDaysBefore = (arr, date) => arr.filter(day => day - date < 0)
  const getDaysAfter = (arr, date) => arr.filter(day => day - date > 0)
  const sortClosestDay = (arr, day) => arr.sort((a, b) => {
    // Вернёт масссив отсортированных дат
    const distancea = Math.abs(day - a)
    const distanceb = Math.abs(day - b)
    return distancea - distanceb
  })[0]

  // данные
  const today = new Date()
  const daysToEnd = diffDate(new Date(deliveries[deliveries.length - 1].date), today)
  daysToEnd.toString().charAt(daysToEnd.toString().length-1)
  const deliveryDates = deliveries.map(item => new Date(item.date))

  // ERROR
  // Если нет следующего дня, то падает с ошибкой, ведь getDaysAfter вернёт пустой массив
  // нет на сегодня больше идей =(

  const nextDeliveryDay = sortClosestDay(getDaysAfter(deliveryDates, today), today)
  const prevDeliveryDay = sortClosestDay(getDaysBefore(deliveryDates, today), today)
  const nextDelivery = deliveries.find(item => item.date === nextDeliveryDay.toISOString().slice(0, 10))
  const prevDelivery = deliveries.find(item => item.date === prevDeliveryDay.toISOString().slice(0, 10))
  const nextDeliveryProps = {
    day: nextDeliveryDay.toLocaleString("ru", {day: 'numeric'}),
    month: nextDeliveryDay.toLocaleString("ru", {month: 'short'}).slice(0, -1),
    dayOfTheWeek: nextDeliveryDay.toLocaleString("ru", {weekday: 'long'})
  }
  const prevDeliveryProps = {
    day: prevDeliveryDay.toLocaleString("ru", {day: 'numeric'}),
    month: prevDeliveryDay.toLocaleString("ru", {month: 'short'}).slice(0, -1),
    dayOfTheWeek: prevDeliveryDay.toLocaleString("ru", {weekday: 'long'})
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
    <View style={styles.orderBlock}>
      <View>
        <Text>{diffDate(new Date(deliveries[0].date), today)}</Text>
        <View>
          <Text>{packageName}</Text>
          <Text>{packageCalories}</Text>
        </View>
      </View>

      <ProgressBar step={1} steps={10} height={20}/>

      <View>
        <Text>{new Date(deliveries[0].date).toLocaleString("ru", {day: 'numeric', month: 'short'}).slice(0, -1)}</Text>
        <Text>{daysToEnd === 1 ? 'Остался ' : 'Осталось '}{daysToEnd}{['1','2','3','4'].includes(daysToEnd.toString().charAt(daysToEnd.toString().length-1)) && ![11,12,13,14].includes(daysToEnd)
          ? daysToEnd === 1 
            ? ' день'
            : ' дня'
          : ' дней'
        }</Text>
        <Text>{new Date(deliveries[deliveries.length - 1].date).toLocaleString("ru", {day: 'numeric', month: 'short'}).slice(0, -1)}</Text>
      </View>
      <View>
        <View>
          <Text>{nextDeliveryProps.month}</Text>
          <Text>{nextDeliveryProps.day}</Text>
        </View>
        <View>
          <Text>Ближайшая доставка
            <Text>{nextDeliveryProps.dayOfTheWeek === 'вторник' 
              ? 'во ' 
              : 'в '}
              {renameDayOfTheWeek(nextDeliveryProps.dayOfTheWeek)} –</Text>
          </Text>
          <Text>{nextDelivery.interval}</Text>
          <Text>{nextDelivery.address}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  orderBlock: {
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    width: '100%'
  }
})

export default Order