import React from 'react'
import { Text ,View,StyleSheet,SafeAreaView,TextInput, Pressable} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 



const HomeScreen = () => {

  
  
  return (
   <SafeAreaView style={styles.container}>
        <View >
           <Text style={styles.headertext}>Galleryspot</Text>
          
        </View>
        <View style={styles.headerview}>
             <Text style={styles.toppictext}>Pictures</Text>
            
             <View style={styles.headericons}>
                 <Pressable>
                    <MaterialIcons name="insert-photo" style={{margin:10}} size={24} color="#EA3D70" />

                 </Pressable>
                 <Pressable>
                     <Octicons name="apps" style={{margin:10}} size={24} color="#EA3D70" />
                 </Pressable>
             </View>
        </View>
        
   </SafeAreaView>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:40,
    alignItems:'center',
    width:'100%',
    height:'100%',
    
  },
  headertext:{
    fontFamily:'OpenSans_700Bold',
    fontSize:24,
    opacity:.7
  },
  headerview:{
    
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-around'
  },
toppictext:{
  fontFamily:"OpenSans_500Medium",
  fontSize:21,
  color:'black',
  opacity:.6,
  margin:6
  
 
},
headericons:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginLeft:40
  
}
 
})
