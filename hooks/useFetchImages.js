import { useEffect, useState } from "react";




export const useFecth = (urlparams) =>{
      
   
    const [result,setresult]=useState('')

    useEffect(()=>{
  
  
      const fetchPhotos =async() =>{
      
        
        //https://pixabay.com/api/videos/?key=38267618-7930a7b89226cfbe7b393f302&id=22634
        //https://pixabay.com/api/videos/?key=38267618-7930a7b89226cfbe7b393f302&q=spider  video search
      
        try {
            const response = await fetch(urlparams);
            const result = await response.json();
           
           
            setresult(result.hits)
        } catch (error) {
            console.error(error);

        }
    
    }
    fetchPhotos();
    },[urlparams])
  
  

    return{result}
}