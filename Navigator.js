import React from 'react'
import { Text ,View} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import UploadScreen from './Screens/UploadSceen';
import ProfileScreen from './Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 



const tab=createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <tab.Navigator  screenOptions={{
      tabBarActiveTintColor: 'white',
    }}>
         <tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color='#EA3D70' size={21} />
          ),tabBarColor:'black'}} />

         <tab.Screen name='Upload' component={UploadScreen} options={{tabBarIcon: ({ color, size }) => (
           <FontAwesome5 name="plus-circle" size={21} color="#EA3D70" />
          ),}} />
         <tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon:({color,size})=>(
         <FontAwesome name="user" size={24} color="#EA3D70" />),}}/>
    </tab.Navigator>
  )
}

export default Navigator