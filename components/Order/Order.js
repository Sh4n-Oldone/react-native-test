import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { OrderTopBlock } from './OrderTopBlock'
import LeftBlock from './InfoBlocks/LeftBlock'
import RightBlock from './InfoBlocks/RightBlock'
import { getDaysAfter, getDaysBefore, sortClosestDay } from '../../utils/sorters'
import { currOrder } from '../../utils/actions'
import moment from 'moment'
import 'moment/locale/ru'

const mapStateToProps = (state) => {
  return { 
    isLogged: state.userStatusReducer,
    user: state.userReducer,
    orders: state.ordersReducer
   }
}

const Order = ({orderObj, packageName, packageCalories, deliveries, navigation}) => {
  const dispatch = useDispatch()
  const today = new Date()

  const deliveryDates = deliveries?.map(item => new Date(item.date))
  const deliveryDatesAfter = getDaysAfter(deliveryDates, today)
  const deliveryDatesBefore = getDaysBefore(deliveryDates, today)

  const nextDeliveryDay = deliveryDatesAfter?.length ? sortClosestDay(deliveryDatesAfter, today) : ''
  const prevDeliveryDay = deliveryDatesBefore?.length ? sortClosestDay(deliveryDatesBefore, today) : ''
  const nextDelivery = deliveryDatesAfter?.length ? deliveries.find(item => item.date === nextDeliveryDay.toISOString().slice(0, 10)) : ''
  const prevDelivery = deliveryDatesBefore?.length ? deliveries.find(item => item.date === prevDeliveryDay.toISOString().slice(0, 10)) : ''
  const nextDeliveryProps = {
    day: deliveryDatesAfter?.length ? moment(nextDeliveryDay).locale('ru').format('D') : '',
    month: deliveryDatesAfter?.length ? moment(nextDeliveryDay).locale('ru').format('MMM').replace('.', '') : '',
    dayOfTheWeek: deliveryDatesAfter?.length ? moment(nextDeliveryDay).locale('ru').format('ddd') : '',
    fullDayOfTheWeek: deliveryDatesAfter?.length ? moment(nextDeliveryDay).locale('ru').format('dddd') : ''
  }

  function handleClick() {
    dispatch(currOrder(orderObj))
    navigation.navigate('Screen_CurrentOrder')
  }

  function deliveriesRender() {
    if( today < new Date(deliveries[deliveries.length-1].date) ) {
      return  <View style={styles.bottomDataBlock}>
                <LeftBlock 
                  nextDeliveryProps={nextDeliveryProps} 
                />
                <RightBlock 
                  nextDeliveryProps={nextDeliveryProps} 
                  nextDelivery={nextDelivery} 
                />
              </View>
    }
    return <></>
  }

  return(
    <TouchableOpacity 
      style={styles.orderBlock}
      onPress={handleClick}
    >
      <OrderTopBlock 
        deliveries={deliveries}
        packageName={packageName}
        packageCalories={packageCalories}
        nextDelivery={nextDelivery}
        prevDelivery={prevDelivery}
      />

      { deliveriesRender() }

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
  bottomDataBlock: {
    flexDirection: 'row',
    marginTop: 23.26
  }
})

export default connect(mapStateToProps)(Order)