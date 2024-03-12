import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  return (
    <WebView
        style={styles.container}
        source={{ uri: 'https://www.lagosfreezone.com/about-us/site-layout/' }}
    />
  )
}

const styles = StyleSheet.create({
   container:{
    flex:1 ,
   } 
})

export default MapScreen