
import React, { createContext, useEffect,useState } from 'react'
import {firebase} from '../database/Firebase'
import { getAuth,signInWithEmailAndPassword,} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import {app} from "../database/Firebase"



export const UseAuth = () => {

  const navigation=useNavigation();
    
    const[error,seterror]=useState(null)


   
  //Login function....      
 const Login =({email,password}) =>{
         const auth = getAuth(firebase);
           signInWithEmailAndPassword(auth, email,password)
              .then((userCredential) => {
        
              const user = userCredential.user;
              navigation.navigate('Picture')
                console.log('success')
        
       
                    })
               .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
             seterror(errorCode)
            }); 

        
      
        
      };



    return {error,Login}


}


