import { View, Text , StyleSheet , StatusBar , FlatList , Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const images = ['' ,'' ,'' , '']


const ImageTile = () => {
  return( <View style={{width:'44%' , height:200, margin:10 ,padding:10 }}>
       <Image resizeMode='contain' style={{width:'100%' ,height:'100%'}} source={require('../assets/images/medical.png')}></Image>
     </View>)
}

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList  numColumns={2} data={images} keyExtractor={ (menu , index ) => index.toString()} renderItem={({item}) => <ImageTile />  } ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  }
})

export default GalleryScreen