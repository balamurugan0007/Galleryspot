import React, { forwardRef } from 'react'
import { View,Text,StyleSheet, Image ,Pressable,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Imgcard = forwardRef(({images},ref) => {

  const navigation=useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate('images',{'id':images.id,'image':images.previewURL,'like':images.likes,
                                     'comment':images.comments,'tags':images.tags,
                                     'user':images.userImageURL,'username':images.user,
                                     'views':images.views,'download':images.downloads,'pic_2':images.webformatURL})}>
          <View ref={ref} key={images.id} style={styles.imgview}>
       
       
               <Image source={{uri:images.previewURL}}  style={{width:150,height:150,borderRadius:4,margin:5}}/>
      
         
        </View>
    </Pressable>
  )
})

export default Imgcard


const styles=StyleSheet.create({

    picture:{
        width:100,
        height:100,
        borderRadius:20,
        

    },
    imgview:{
      flexDirection:'row',
      flexWrap:'wrap',
    }
    

})