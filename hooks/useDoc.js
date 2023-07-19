import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../database/Firebase";
import { useNavigation } from "@react-navigation/native";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {storage} from '../database/Firebase'




export const useDoc = (collection) => {
    
  const navigation=useNavigation();
    const [error,seterror]=useState(null)



    ///storage upload files
    const  uploadStorage = async (image) =>{

      const uploadUri = await fetch(image)
      const storageRef = ref(storage, 'images/arml');
      const metadata = {
            contentType: 'image/jpeg',
        };

      // Upload the file and metadata
      const uploadTask = uploadBytes(storageRef, uploadUri, metadata);
  
    }
    



    ////document uploading fields
    const addDocument = async(data) => {


        try {
            const docRef = await addDoc(collection, data
            
             );
          
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('Home')
          } catch (e) {
            console.error("Error adding document: ", e);
            seterror(e)
          }
    }
  
  
    return {error,addDocument,uploadStorage}
}


