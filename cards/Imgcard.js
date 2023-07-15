import React, { forwardRef } from 'react'
import { View,Text,StyleSheet, Image } from 'react-native'

const Imgcard = forwardRef(({images},ref) => {
  return (
    <View ref={ref} key={images.id} style={styles.imgview}>
        <Text>{images.photographer}{images.photographer_id}</Text>
       
            <Image  source={images.src.original} style={styles.picture} alt={images.alt}/>
      
    </View>
  )
})

export default Imgcard


const styles=StyleSheet.create({

    picture:{
        width:150,
        height:150,

    },

})