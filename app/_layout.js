import { Stack } from 'expo-router/stack';
import colors from '../config/colors';
import { Slot } from 'expo-router'
import { View } from 'react-native';




export default function Layout() {


  return ( <View style={{ flex:1 , backgroundColor:colors.primary}}>
                 <Stack></Stack>
            </View> 
  )
}
