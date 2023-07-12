import React from 'react'
import { SafeAreaView, Text ,View,StyleSheet} from 'react-native'

const ProfileScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
       <View>
        
         <View >
           <Text style={styles.headertext}>Galleryspot</Text>
        </View>
    </View>
   </SafeAreaView>
  )
}

export default ProfileScreen

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


})