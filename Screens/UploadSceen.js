import React, { useState } from 'react'
import { SafeAreaView, Text ,View,StyleSheet, TextInput,Image, Touchable, TouchableOpacity,Pressable, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import {db,storage} from '../database/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDoc } from '../hooks/useDoc';
import { Appwrite } from '../pictures/Appwrite';
import {  uploadBytes } from "firebase/storage";

const UploadScreen = () => {
  const [image,setImage]=useState(null)
  const [title,settitle]=useState('')
  const [Catogory,setcatogory]=useState('')
  const [url,seturl]=useState('')
  const [description,setdescription]=useState('')

  const {error,addDocument}=useDoc()


  

  const getimage = async() =>{
     //const requst=await ImagePicker.getMediaLibraryPermissionsAsync();

    // if(requst===false){
    ///  Alert.alert('permission acsss deneid')
    // }


    const request=ImagePicker.getCameraPermissionsAsync();
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:false,
      

    })
    if(!result.canceled){
      console.log(result.uri);
      setImage(result.assets);
    }

    //Appwrite(image)

    const imagepath= await fetch(image)

// 'file' comes from the Blob or File API
const storageRef = ref(storage, 'pictures/mountains.jpg');

// Create file metadata including the content type
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, imagepath, metadata).then(console.log('suceess'));
  }



const uploadpin = async() =>{
 

{/*  const imagepath=await fetch(image.uri);


  const storageRef = ref(storage, 'images/mountains.jpg');
 await uploadBytes(storageRef, imagepath).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    console.lod(snapshot)
  });
*/}

const data={
  'title':title,
  'catogory':Catogory,
  'link':url,
  'description':description,
  
  
}
addDocument(data)


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
                    <Image source={{uri:image}} style={{width:270,
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