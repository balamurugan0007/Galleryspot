import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../database/Firebase";
import { useNavigation } from "@react-navigation/native";



export const useDoc = () => {
    const navigation=useNavigation();

    const [error,seterror]=useState(null)
    

    const addDocument = async(data) => {


        try {
            const docRef = await addDoc(collection(db, "uploadpin"), data
            
             );
          
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('Home')
          } catch (e) {
            console.error("Error adding document: ", e);
            seterror(e)
          }
    }
  
  
    return {error,addDocument}
}


