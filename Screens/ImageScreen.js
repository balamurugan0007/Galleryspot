import React, { useEffect, useState } from 'react'
import { View,Text ,Image,StyleSheet,ScrollView, Pressable} from 'react-native'
import { useFecth } from '../hooks/useFetchImages';

import { Ionicons,Fontisto ,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import Imgcard from '../cards/Imgcard';
import { useNavigation } from '@react-navigation/native';


const ImageScreen = ({route}) => {


  const imageid =route.params;
  


  const url =`https://pixabay.com/api/?key=38267618-7930a7b89226cfbe7b393f302&q=${imageid.tags}`
  
    
    const {result}=useFecth(url)

  const navigation = useNavigation();

  
//share-square-o
  
  return (
    <ScrollView>
         { imageid? 
          <View >
               
                <View key={imageid.id} style={{justifyContent:'center',padding:40,}}>
                <Pressable onPress={navigation.goBack()} >
                   <Ionicons name='arrow-back' size={21} color='#232428' />
                </Pressable>
                <Image source={{uri:imageid.image}} style={{width:290,height:350,marginTop:10}} />
                <View style={styles.userview}>
                  
                        {
                          imageid.user? <Image source={{uri:imageid.user}}  style={styles.userimage} />:null
                        }
                        <Text style={styles.usename}>{imageid.username}</Text>
                    
                </View>

                <View style={styles.ratingsview}>
                    <View style={styles.iconsview}>
                        <Ionicons name='eye' size={24} color='#EA3D70'/>
                        <Text style={styles.icontext} >{imageid.views}</Text>
                    </View>
                    <Pressable>
                            <View style={styles.iconsview}>
                                <Fontisto name='comments' size={24} color='#EA3D70'/>
                                <Text style={styles.icontext} >{imageid.comment}</Text>
                            </View>
                    </Pressable>
                    <Pressable>
                          <View style={styles.iconsview}>
                                <MaterialCommunityIcons name='download-circle' size={24} color='#EA3D70' />
                                <Text style={styles.icontext} >{imageid.download}</Text>
                          </View>
                    </Pressable>
                    <Pressable onPress={shareitems}>
                          <View style={styles.iconsview}>
                              <FontAwesome name='share-square-o' size={24} color='#EA3D70'/>
                              <Text style={styles.icontext} >{imageid.comment}</Text>
                          </View>
                    </Pressable>
                </View>
             </View>

          </View>
         :<Text>server error</Text>}
 

           
          <Text style={{fontFamily:'OpenSans_500Medium',fontSize:21,color:'black',opacity:.6,margin:10,padding:15}}>
             Similar your search 
             </Text>

         <View style={styles.similarpics}>
            {
               result && result.map((pic)=>(
                <Imgcard key={pic.id} images={pic} />
               ))
            }
         </View>
    </ScrollView>
  )
}

export default ImageScreen


const styles =StyleSheet.create({



  ratingsview:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  iconsview:{
    justifyContent:'center',
    alignItems:'center',
    margin:8
  },
  userview:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },
  userimage:{
    width:50,
    height:50,
    borderRadius:400/2,
  },
  usename:{
    fontFamily:'OpenSans_700Bold',
    fontSize:21,
    color:'black',
    opacity:.7,
    margin:5
  },
  icontext:{
    fontFamily:'OpenSans_500Medium',
    fontSize:13,
    color:'black',
    opacity:.5,
    margin:2,
  },
  similarpics:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  }
})