import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'

import SearchScreen from 'screens/searchScreen';
import SavedScreens from 'screens/savedScreens';
import HomeScreen from 'screens/homeScreen';

import CustomTabBar from 'components/customBar';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Ana sayfa" component={HomeScreen} />
            <Tab.Screen name="Keşfet" component={SearchScreen} />
            <Tab.Screen name="Kaydedilenler" component={SavedScreens} />
        </Tab.Navigator>
    )
}

export default BottomTabs