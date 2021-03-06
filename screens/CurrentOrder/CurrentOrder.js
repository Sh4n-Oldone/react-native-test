import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { OneDelivery } from '../../components/OneDelivery/OneDelivery'
import { OrderTopBlock } from '../../components/Order/OrderTopBlock'
import { getDaysAfter, getDaysBefore, sortClosestDay } from '../../utils/sorters'
import { addOrder, removeOrder } from '../../utils/actions'
import Buttons from './Buttons/Buttons'

const mapStateToProps = (state) => {
  return { 
    orderData: state.currentOrderReducer
   }
}

const CurrentOrder = ({ navigation, orderData }) => {
  const dispatch = useDispatch()

  const packageName = orderData.packageName
  const packageCalories = orderData.packageCalories
  const deliveries = orderData.deliveries

  const today = new Date()

  const deliveryDates = deliveries?.map(item => new Date(item.date))
  const deliveryDatesAfter = getDaysAfter(deliveryDates, today)
  const deliveryDatesBefore = getDaysBefore(deliveryDates, today)

  const nextDeliveryDay = deliveryDatesAfter?.length ? sortClosestDay(deliveryDatesAfter, today) : ''
  const prevDeliveryDay = deliveryDatesBefore?.length ? sortClosestDay(deliveryDatesBefore, today) : ''
  const nextDelivery = deliveryDatesAfter?.length ? deliveries.find(item => item.date === nextDeliveryDay.toISOString().slice(0, 10)) : ''
  const nextDeliveries = deliveryDatesAfter?.length ? deliveries.filter(item => new Date(item.date) > today) : ''
  const prevDelivery = deliveryDatesBefore?.length ? deliveries.find(item => item.date === prevDeliveryDay.toISOString().slice(0, 10)) : ''

  function handleBackClick() {
    navigation.navigate('Screen_UserOrders')
  }

  function deliveriesRender() {
    if (nextDeliveries) {
      nextDeliveries.map(item => <OneDelivery key={item.id} date={item.date} interval={item.interval} />)
    }
    return <></>
  }

  function handleDuplicate() {
    // тут должен быть очередной фетч-пост, который вернёт обновлённый список
    // но пока я ограничусь сменой id в существующей копии
    const newOrder = {...orderData}
    newOrder.id = Math.floor(Math.random() * 100)
    dispatch(addOrder(newOrder))
  }
  function handleDelete() {
    dispatch(removeOrder(orderData))
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
      <OrderTopBlock 
        deliveries={deliveries}
        packageName={packageName}
        packageCalories={packageCalories}
        nextDelivery={nextDelivery}
        prevDelivery={prevDelivery}
      />

      <Text
        style={styles.title}
      >Доставки</Text>

      { deliveriesRender() }

      <Buttons 
        handleDuplicate={handleDuplicate} 
        handleDelete={handleDelete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  orderWrapper: {
    flex: 1,
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  backButton: {
    marginTop: 0,
    marginBottom: 22
  },
  backButton__text: {
    color: '#1E6FB9',
    fontSize: 17
  },
  title: {
    color: '#070707',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 17,
    marginTop: 34
  },
  buttonsBlock: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 54.75
  },
  buttonsBlock__button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 17,
    paddingRight: 17
  },
  buttonsBlock__title: {
    color: '#3F3F3F',
    fontSize: 17
  },
  buttonsBlock__imageWrapper: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps)(CurrentOrder)