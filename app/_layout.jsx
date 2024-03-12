import { Stack } from 'expo-router/stack';
import colors from '../config/colors';
import { View, Text , StyleSheet , StatusBar  } from 'react-native'
import { Entypo } from '@expo/vector-icons';




export default function Layout() {


  return ( <View style={{ flex:1 }}>
                 <Stack screenOptions={{
                  title:null,
                  headerBackTitle:'Back',
                  headerStyle:{ backgroundColor:colors.primary  },
                  headerTintColor:'white',
                  headerRight:() => <Entypo name="menu" size={25} color="white" />,
                  }} />
            </View> 
  )
}
