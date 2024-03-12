import { View,  StyleSheet , StatusBar  } from 'react-native'
import React from 'react'
import Gallery from '../components/Gallery';
import colors from '../config/colors';

const images = ['https://www.lagosfreezone.com/media/1293/23s.jpg' ,'https://www.lagosfreezone.com/media/1305/29s.jpg' ,'https://www.lagosfreezone.com/media/1291/22s.jpg' , 'https://www.lagosfreezone.com/media/1307/36s.jpg'
,'https://www.lagosfreezone.com/media/1317/31s.jpg'
]




const GalleryScreen = () => {
  return (
    <View style={styles.container}>
        <Gallery images={images} />
        <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  }
})

export default GalleryScreen