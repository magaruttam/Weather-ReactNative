import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { StyleSheet } from 'react-native'
import BottomNav from '../components/BottomNav'
import Tabs from '../components/ui/Tabs'
import { useState } from 'react'

const Forecast = () => {
  const [activeTab, setActiveTab] = useState('hourly');

  const tabs = [
    {
      label: 'Hourly',
      value: 'hourly',
    },
    {
      label: 'Daily',
      value: 'daily',
    },
  ];

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Forecast"/>
            <View style={styles.body_section}>
                  <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'hourly' && (
        <Text>Hourly Forecast</Text>
      )}

      {activeTab === 'daily' && (
        <Text>Daily Forecast</Text>
      )}
            </View>
            <BottomNav/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1227',
    paddingHorizontal: 24,
    flex: 1,
  },
  body_section : {
    flex: 1
  }
})
export default Forecast