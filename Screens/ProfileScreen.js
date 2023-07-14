import React from 'react'
import { SafeAreaView, Text ,View,StyleSheet, Button} from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../database/Firebase'
const ProfileScreen = () => {


 const userdata=()=>{
  const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
});

 }

  return (
   <SafeAreaView style={styles.container}>
       <View>
        
         <View >
           <Text style={styles.headertext}>Galleryspot</Text>
           <Button title='getuser'  onPress={userdata}/>
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