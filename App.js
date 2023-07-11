import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './Screens/HomeScreen';
import UploadScreen from './Screens/UploadSceen';
import ProfileScreen from './Screens/ProfileScreen';
import { useFonts,OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold, } from '@expo-google-fonts/open-sans';
import * as Splashscreen from 'expo-splash-screen'

import RegisterScreen from './Screens/RegisterScreen'
import Navigator from './Navigator';


const stack=createStackNavigator();




//if (!fontsLoaded) {
  //return null;
//}

export default function App() {


  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold, 
   

 });

 if (!fontsLoaded) {
   return null;
 }
 
  return (
    <NavigationContainer >
         <stack.Navigator>
             <stack.Screen name='Register' component={RegisterScreen} options={{header:()=>null}} />
             <stack.Screen name='Picture' component={Navigator} options={{header:()=>null}} />
             
         </stack.Navigator>
         
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  
});
