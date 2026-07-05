import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native'
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { observer } from 'mobx-react-lite'
import { weatherStore } from '../store/WeatherStore'
import { useNavigation } from '@react-navigation/native'
import BottomNav from '../components/BottomNav'

const Search = observer(() => {
  const [text, setText] = useState('')
  const navigation = useNavigation()

  const handleSubmit = () => {
    if (text.trim()) {
      weatherStore.fetchWeather(text.trim())
      navigation.goBack()
    }
  }

  return (
   <SafeAreaView style={styles.container}>
    <Header title="Search"/>
    <View style={styles.body}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={22}
          color="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your location..."
          placeholderTextColor="#8F8FA0"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          returnKeyType="search"
        />
      </View>
    </View>
    <BottomNav />
    </SafeAreaView>
  )
})
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1227',
    paddingHorizontal: 24,
    flex: 1,
  },
  body: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',     
    alignItems: 'center',      
    backgroundColor: '#26283F',
    borderRadius: 48,
    paddingHorizontal: 10,
    height: 45,
    marginTop: 16
  },
  input: {
    flex: 1,                   
    marginLeft: 8,           
    fontSize: 16,
    color: '#8F8FA0'
  },
  bottom: {
    position: 'relative'
  }
});


export default Search