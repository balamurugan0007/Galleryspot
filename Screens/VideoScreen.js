import { useState } from 'react';
import { Text ,View,StyleSheet,SafeAreaView,TextInput, Pressable, Button, ScrollView,Image,ActivityIndicator} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useFecth } from '../hooks/useFetchImages';
import  {Video,ResizeMode} from 'expo-av'

const VideoScreen = () => {
    const [keyword,setkeyword]=useState('flowers')

    const navigation =useNavigation();
   const url =`https://pixabay.com/api/videos/?key=38267618-7930a7b89226cfbe7b393f302&q=${keyword}`
   
   
   
      const {result}=useFecth(url)
      
   
    return (
     <SafeAreaView style={styles.container}>
           
           <View >
             <Text style={styles.headertext}>Galleryspot</Text>
            
          </View>
  
          <View style={{flexDirection:'row',backgroundColor:'#ffff',borderRadius:20,height:40,margin:15}}>
  
               <TextInput
                    placeholder='  search'
                    onChangeText={(text)=>(setkeyword(text))}
                    style={styles.formname}
                 />
              
                  <Ionicons name='ios-search-circle' size={28} color='#EA3D70' style={{margin:4}}/>
              
          </View>

     <ScrollView showsVerticalScrollIndicator={false}>
            
        {
          result? result.map((videos)=>(
            <View key={videos.id}>
               

               <Video
     
        style={{height:300,width:300}}
        source={{
          uri:videos.videos.small.url
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
       
      />
      
            </View>
          )):
          <Text>Loading</Text>
        }
        </ScrollView>
         
         
          
   </SafeAreaView>
    )
}

export default VideoScreen



const styles=StyleSheet.create({
    container:{
      flex:1,
      marginTop:30,
      alignItems:'center',
      width:'100%',
      height:'100%',
      
    },
    headertext:{
      fontFamily:'OpenSans_700Bold',
      fontSize:24,
      opacity:.7
    },
    headerview:{
      
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-around'
    },
  toppictext:{
    fontFamily:"OpenSans_500Medium",
    fontSize:21,
    color:'black',
    opacity:.6,
    margin:6
    
   
  },
  headericons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:40
    
  },imagesview:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
    
  },
  
  formname:{
    width:270,
    height:30,
   margin:5,
    backgroundColor:"#ffff",
    color:'black',
    borderRadius:10,
    fontFamily:'OpenSans_400Regular',
    fontSize:18,
    opacity:.2,
    
   
   },
  
  })
  