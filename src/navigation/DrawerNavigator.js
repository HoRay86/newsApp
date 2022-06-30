import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import BottomTabNavigator from './BottomTabNavigator';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const { Navigator, Screen } = drawer
    return (
        <Navigator>
        <Screen name="News" component={BottomTabNavigator}  
        options={{headerShown:false}}
        />
        <Screen name="About" component={AboutScreen}  />
        </Navigator>
    );
}

export default DrawerNavigator;