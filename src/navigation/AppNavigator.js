import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Screen
import NewsListScreen from '../screens/NewsListScreen';
import NewsItemScreen from '../screens/NewsItemScreen';

// stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const newsStack = createNativeStackNavigator();

const StackNavigator = ({navigation})=>{
    const { Navigator, Screen } = newsStack
    return(
        <Navigator initialRouteName='News' 
            screenOptions={{
                headerTitleAlign:'center',
                headerTitleStyle: { fontWeight: 'bold'}
            }}>
            <Screen name='News' component={NewsListScreen}
                options={{
                    headerLeftContainerStyle: { paddingHorizontal: 12 },
                    headerLeft: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <Ionicons name="menu" size={24} />
                    </TouchableOpacity>
                    ),}
                }
            />
            <Screen name='NewsItem' component={NewsItemScreen} options={{headerTitle: 'News'}} />

        </Navigator>
    )
}

export default StackNavigator;




