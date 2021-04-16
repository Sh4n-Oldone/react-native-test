import React, { useEffect, useRef, useState } from 'react'
import { View, Animated } from 'react-native'

export const ProgressBar = ({step, steps, height}) => {
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
        backgroundColor: '#E9E9E9',
        borderRadius: height,
        overflow: 'hidden',
        marginBottom: 7.75
      }}
    >
      <Animated.View 
        style={{
          height,
          width: '100%',
          backgroundColor: '#1E6FB9',
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