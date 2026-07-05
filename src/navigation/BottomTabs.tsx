import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Forecast from '../screens/Forecast';
import Search from '../screens/Search';





const Stack = createStackNavigator();
const BottomTabs = () => {
    return (
        <Stack.Navigator
         screenOptions={{
    headerShown: false,
  }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Forecast" component={Forecast} />
            <Stack.Screen name="Search" component={Search} />

        </Stack.Navigator>
    )
}

export default BottomTabs