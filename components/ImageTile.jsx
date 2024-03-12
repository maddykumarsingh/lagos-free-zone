import React  from "react"
import { Text , View  , Image } from "react-native"

export default ImageTile = ({source}) => {
    return( <View style={{width:'44%' , overflow:'hidden',  shadowOffset:{  width: 2 , height: 5 },
    shadowOpacity:0.2,
    elevation:3,
    shadowRadius:4, height:150, margin:10 ,padding:2 }}>
         <Image resizeMode='contain' style={{width:'100%' ,height:'100%'}} source={{ uri:source}}></Image>
       </View>)
  }
