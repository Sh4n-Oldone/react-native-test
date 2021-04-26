import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import DeleteImg from '../svg/DeleteImg'
import DuplicateImg from '../svg/DuplicateImg'

export default function Buttons({handleDuplicate, handleDelete}) {

  return (
    <View style={styles.buttonsBlock}>
      <TouchableOpacity
        style={styles.buttonsBlock__button}
        onPress={handleDuplicate}
      >
        <Text style={styles.buttonsBlock__title}>Дублировать заказ</Text>
        <View style={styles.buttonsBlock__imageWrapper}>
          <DuplicateImg />
        </View>
      </TouchableOpacity>
      <View style={{height: 1, width: '100%', backgroundColor: '#D6D6D6'}}></View>
      <TouchableOpacity
        style={styles.buttonsBlock__button}
        onPress={handleDelete}
      >
        <Text style={styles.buttonsBlock__title}>Отменить заказ</Text>
        <View style={styles.buttonsBlock__imageWrapper}>
          <DeleteImg />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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