import { View, Text, Image  , StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default NewsDetailScreen = () => {

  const articleLink = "https://expo.dev"

  if( articleLink ){
    return (
        <WebView
          style={styles.container}
          source={{ uri: 'https://expo.dev' }}
        />
      );
  }
    
  return (
    <View style={styles.container}>
        <Image style={styles.thumbnail} source={{ uri:'https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg'}}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    thumbnail:{
         width:'100%',
         height:'30%'
    }
})
