import { View, Pressable, Text , StyleSheet , Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Link } from 'expo-router'


const ColorBar = ({ color }) => {
    return ( 
        <View style={{ width:'70%' , height:6 , borderRadius:10, backgroundColor:color}}>

        </View>
    )
}

const Tile = ({ name , url, color }) => {
  return (
    <View style={styles.container}>
        <Image style={{ width:50 , height:50}} source={{ uri: 'https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png' }}></Image>
        <Link href={url} asChild>
            <Pressable>
                <Text>{name}</Text>
            </Pressable>
        </Link>
        <ColorBar color={color}></ColorBar>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
     backgroundColor:colors.white,
     justifyContent:'space-around',
     width:'42%',
     margin:10,
     height:150,
     alignItems:'center',
     padding:10,
     borderRadius:10,
     shadowOffset:{  width: 2 , height: 5 },
     shadowOpacity:0.2,
     shadowRadius:4,
     elevation:3
   } 
})

export default Tile