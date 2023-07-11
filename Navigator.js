import React from 'react'
import { Text ,View} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import UploadScreen from './Screens/UploadSceen';
import ProfileScreen from './Screens/ProfileScreen';
import AntIcons from 'react-native-vector-icons/AntDesign'

const tab=createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <tab.Navigator  screenOptions={{
      tabBarActiveTintColor: '#820080',
    }}>
         <tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:(size,color)=>{<AntIcons name='home' size={21} color={'black'}/>}}} />
         <tab.Screen name='Upload' component={UploadScreen}/>
         <tab.Screen name='Profile' component={ProfileScreen} />
    </tab.Navigator>
  )
}

export default Navigator