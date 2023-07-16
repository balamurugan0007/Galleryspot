import React, { useState } from 'react'
import { SafeAreaView, Text ,View,StyleSheet, TextInput,Image, Touchable, TouchableOpacity,Pressable, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import { useDoc } from '../hooks/useDoc';
import { getStorage, ref, uploadBytes,uploadBytesResumable,updateMetadata } from "firebase/storage";

import * as ImagePicker from 'expo-image-picker'
import {storage} from '../database/Firebase'



const UploadScreen = () => {

  const [image,setImage]=useState(null)
  const [title,settitle]=useState('')
  const [Catogory,setcatogory]=useState('')
  const [url,seturl]=useState('')
  const [description,setdescription]=useState('')

  const {error,addDocument,uploadStorage}=useDoc();
 
 

  const getimage = async() => {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
     
        let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets.uri);
      
      setImage(result.uri);
    }else{
      alert('image not selected')
    }
  
  
  }


const uploadpin = async() =>{

//gs://galleryspot-7a94d.appspot.com/Uploadpin/Review of Marvel’s Spider-man_ Miles Morales.jpeg
 
const imageurl=`gs://galleryspot-7a94d.appspot.com/uploadimages/${title}`
const data={
  'title':title,
  'catogory':Catogory,
  'link':url,
  'description':description,
  'imagelink':imageurl,
  
  
}





 const uploadUri = await fetch(image)


const storageRef = ref(storage, 'images/arml');


const metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, uploadUri, metadata);

}

  return (
   <SafeAreaView style={styles.container}>
       
       <View>
      
           
         <View style={styles.formview}>
          <Text style={styles.formhead}>Upload Pin</Text>
              <TextInput placeholder='Title' style={styles.form} onChangeText={newText => settitle(newText)}/>
              <TextInput placeholder='Catogory' style={styles.form} onChangeText={newText => setcatogory(newText)}/>
              <TextInput placeholder='URL Links.' style={styles.form} onChangeText={newText => seturl(newText)}/>
              <TextInput placeholder='Description' style={styles.form} onChangeText={newText => setdescription(newText)}/>


               <Pressable onPress={getimage} >
                    {image?
                    <Image source={{uri:image.uri}} style={{width:270,
                      height:300,}}/>
                    :<View style={styles.imageview}>
                        <Ionicons name="add-circle" size={34} color="#0077F3" />
                       </View>}
              
               </Pressable>

               <TouchableOpacity onPress={uploadpin} style={styles.uploadbtn}>
                    <Text style={styles.uploadbtntext}>Upload</Text>
               </TouchableOpacity>
          
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
  },
  uploadbtn:{
    backgroundColor:'#0077F3',
    width:270,
    margin:10,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  uploadbtntext:{
    fontFamily:'OpenSans_700Bold',
    fontSize:16,
    color:'white',
    
  }


  


})