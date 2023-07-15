import { useEffect, useState } from "react";




export const useFecth = (keyword) =>{
      
   
    const [image,setimage]=useState('')

    useEffect(()=>{
  
  
      const fetchPhotos =async() =>{
      
        const url = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${keyword}&locale=en-US&per_page=15&page=1`;
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'UKiE8NKEqbODiPJshWT4Yvc8iWbbfRVrvNxUbQCS5x1CG3krPyFZTkkn',
                'X-RapidAPI-Key': 'c36f5511acmsh9c19167b3c828c3p12e9b4jsn07f8f6884e3f',
                'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const data=result.photos
            console.log(result.photos)
            setimage(result.photos)
        } catch (error) {
            console.error(error);
        }
    
    }
    fetchPhotos();
    },[keyword])
  
  

    return{image}
}