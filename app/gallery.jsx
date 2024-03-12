import { View,  StyleSheet  } from 'react-native'
import React from 'react'
import Gallery from '../components/Gallery';

const images = ['https://www.lagosfreezone.com/media/1293/23s.jpg' ,'https://www.lagosfreezone.com/media/1305/29s.jpg' ,'https://www.lagosfreezone.com/media/1291/22s.jpg' , 'https://www.lagosfreezone.com/media/1307/36s.jpg'
,'https://www.lagosfreezone.com/media/1317/31s.jpg'
]




const GalleryScreen = () => {
  return (
    <View style={styles.container}>
        <Gallery images={images} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  }
})

export default GalleryScreen