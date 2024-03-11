import { View, Text , StyleSheet , Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const Ads = () => {
  return (
    <View style={styles.container}>
      <Image style={{height:'100%', width:'100%'}} source={{ uri:'https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png'}}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 150 ,
        backgroundColor:colors.white,
        borderRadius:20,
        shadowOffset:{  width: 2 , height: 5 },
        shadowOpacity:0.2,
        shadowRadius:4,
        overflow: 'hidden',
        marginBottom:20,
        elevation:3
    }
})

export default Ads