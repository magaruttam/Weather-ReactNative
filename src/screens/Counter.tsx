import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { StyleSheet } from 'react-native'
import { counterStore } from '../store/CounterStore'

const Counter = observer(() => {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>Count: {counterStore.count}</Text>
 <Text style={styles.text}>DoubleCount: {counterStore.double}</Text>
 {/* <Text style={styles.text}>Count: {counterStore.name}</Text> */}
  <TouchableOpacity onPress={() => counterStore.increment()}><Text>Increment</Text> </TouchableOpacity>
    <View style={{ height: 10 }} />
    <TouchableOpacity onPress={() => counterStore.decrement()}><Text>Decrement</Text> </TouchableOpacity>
    </View>
  )
})

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
})