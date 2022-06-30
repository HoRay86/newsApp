import React from 'react'
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from './AppNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';

// tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator=({navigation})=> {
    const { Navigator, Screen } = Tab
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Favorites') {
                    iconName = focused ? 'heart' : 'heart-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}     />;
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#00CACA',
                headerTitleAlign:'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }, 
                headerLeftContainerStyle: { paddingHorizontal: 12 },
                headerLeft: () => (
                <TouchableOpacity onPress={navigation.openDrawer}>
                    <Ionicons name="menu" size={24} />
                </TouchableOpacity>
                ),
            })}
        >
        <Screen name="Home" component={StackNavigator} 
            options={{headerShown:false, }}
        />
        <Screen name="Favorites" component={FavoritesScreen} />
        </Navigator>
    );
}

export default BottomTabNavigator;