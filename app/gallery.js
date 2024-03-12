import { View, Text , StyleSheet , StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const gallery = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Gallery',
          
        }}
      />
      <Text>gallery</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  }
})

export default gallery