import { FlatList, StyleSheet, Text, View ,Image, Button , StatusBar } from 'react-native';
import Tile from '../components/Tile';
import colors from '../config/colors';
import Ads from '../components/Ads';
import { Stack } from 'expo-router';

function LogoTitle() {
  return (
    <Image
      style={{width:100, height:30}}
      source={require('../assets/images/dashboard-logo.png')}
      resizeMode='contain'
    />
  );
}

const menus = [
  { id:1 , url:'news', title:'News &  Annoucements' , iconSrc:require('../assets/images/newspaper.png') , color:'#feae25' },
  { id:2 , url:'medical' ,title:'Medical Services' , iconSrc:require('../assets/images/medical.png') , color :'#ff3855' },
  { id:3 , url:'eservice', title:'E-Service' , iconSrc:require('../assets/images/internet.png') , color:'#37ce64' },
  { id:4 , url:'incident', title:'Incident Module' , iconSrc:require('../assets/images/warning-menu.png') , color:'#004fc2' },
  { id:5 , url:'gallery', title:'Gallery' , iconSrc:require('../assets/images/upload.png') , color:'#0395de' },
  { id:6 , url:'map', title:'LFZ Map' , iconSrc:require('../assets/images/map-menu.png') , color:'#ad2ef5' },
  { id:6 , url:'events',title:'Events' , iconSrc:require('../assets/images/events-menu.png') , color:'#feae25' },
  { id:6 , url:'sustainability',title:'Sustainability' , iconSrc:require('../assets/images/durable.png') , color:'#ff3855' },
  { id:6 , url:'directory',title:'Directory' , iconSrc:require('../assets/images/file-system.png') , color:'#37ce64' },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerLeft: props => <LogoTitle style={{ height:23,width:23 }} {...props} />,
        }}
      />
       <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
       <Ads></Ads>
       <FlatList numColumns={2} data={menus} keyExtractor={ menu => menu.id.toString()} renderItem={({item}) => <Tile menu={item} ></Tile>  } ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding:10
  },
});
