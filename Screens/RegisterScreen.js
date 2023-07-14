import React, { useState } from 'react'
import { View,Text ,StyleSheet,SafeAreaView,Image,TextInput,Button, Pressable, Alert, ImageBackground,TouchableOpacity }from 'react-native'
import app from '../database/Firebase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const RegisterScreen = ({navigation}) => {


  const register =()=>{
    const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('Login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode)
    // ..
  });

  }
  //const user={"name":name,"age":email,"city":password}
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const[error,seterror]=useState(null)

  
  

  


  return (
   <SafeAreaView style={styles.container}>
       <ImageBackground style={styles.backgroundimage} source={require('../assets/images/back.jpeg')} >
           <View style={styles.formview}>
             <Text style={styles.header} >Gallery Spot</Text>
             
               <View style={styles.formtextview}>
               <Text style={styles.formheader} >Register Here</Text>
     
                      <TextInput style={styles.formname} placeholder='  Username' onChangeText={newText => setname(newText)}/>
                      <TextInput style={styles.formname} placeholder='  email' onChangeText={newText => setemail(newText)} />
                       <TextInput style={styles.formname}  placeholder='  password' onChangeText={newText => setpassword(newText)} />
                      <TouchableOpacity style={styles.submitbtn} onPress={register}>
                           <Text style={styles.submitbtntext}>Create Account</Text>
                      </TouchableOpacity>
                      <Text>{ error? <Text>{error}</Text>:null}</Text>
                          <Pressable onPress={()=>navigation.navigate('Login')} >
                            <Text style={styles.logintext}>You have an Account Login</Text> 
                          </Pressable>
                       
                </View>
           </View>
       </ImageBackground>
   </SafeAreaView>
  )
}


export default RegisterScreen


const styles=StyleSheet.create({
  header:{
  
    fontFamily:'OpenSans_700Bold' , fontSize: 24,
    padding:2,
    color:"#820080",
    marginTop:40,
    alignItems:'center',
   
  },
  container:{
    flex:1,
    backgroundColor:"#4744CD",
    alignItems:'center',
    
  },
  formview:{
    justifyContent:'center',
    alignItems:'center',

  },
  formheader:{
    fontFamily:'OpenSans_700Bold',
    fontSize:24,
    color:'white',
    marginTop:20,
    marginBottom:10
    
    
  },

  formname:{
    width:250,
    height:40,
   margin:10,
    backgroundColor:"#ffff",
    color:'black',
    borderRadius:10,
    fontFamily:'OpenSans_400Regular',
    fontSize:18,
    opacity:.7
   
  },
  backgroundimage:{
    width:'100%',
    height:'100%',
    
  },
  
  signintext:{
    opacity:8,
    fontFamily:'OpenSans_400Regular',
    fontSize:12,
    

  },submitbtn:{
    backgroundColor:'#820080',
    width:250,
    height:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    
  },submitbtntext:{
    color:'white',
    fontFamily:'OpenSans_500Medium',
    fontSize:18,
  },
  formtextview:{
    alignItems:'center',
    justifyContent:'center',
    height:'85%'
  },
  logintext:{
    fontFamily:'OpenSans_400Regular',
    fontSize:13,
    color:'white',
    opacity:.8,
    marginTop:10
  },

  
    
})