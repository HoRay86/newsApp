import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { Provider } from 'react-redux'
import { store } from './redux/store';

export default function App() {
  return (
    <NavigationContainer>
        <Provider store={store}>
            <DrawerNavigator/>   
        </Provider>
          
    </NavigationContainer>
   
  );
}

