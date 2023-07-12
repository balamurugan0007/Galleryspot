import React, { useState } from 'react'
import { SafeAreaView, Text ,View,StyleSheet, TextInput,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const UploadScreen = () => {
  const [image,setImage]=useState(null)
  return (
   <SafeAreaView style={styles.container}>
       
       <View>
      
           
         <View style={styles.formview}>
          <Text style={styles.formhead}>Upload Pin</Text>
              <TextInput placeholder='Title' style={styles.form}/>
              <TextInput placeholder='Catogory' style={styles.form}/>
              <TextInput placeholder='URL Links.' style={styles.form}/>
              <TextInput placeholder='Description' style={styles.form}/>


               <View>
                    {image?
                    <Image source={''}/>
                    :<View style={styles.imageview}>
                        <Ionicons name="add-circle" size={34} color="#0077F3" />
                       </View>}
              
               </View>
          
         </View>
       </View>
   </SafeAreaView>
  )
}

export default UploadScreen

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
  form:{
    width:270,
    height:40,
   margin:10,
    backgroundColor:"#DDD7C6",
    color:'black',
   
    fontFamily:'OpenSans_400Regular',
    fontSize:18,
    opacity:.7,
    borderWidth:1,
    borderColor:'#0077F3'
  },
  formhead:{
    fontFamily:'OpenSans_500Medium',
    
  },
  formview:{
    alignItems:'center',
    marginTop:20
  },
  imageview:{
    width:270,
    height:300,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF6FC'
  }


  


})