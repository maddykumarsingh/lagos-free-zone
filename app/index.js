import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Tile from '../components/Tile';
import colors from '../config/colors';
import Ads from '../components/Ads';


const menus = [
  { id:1 , url:'news', title:'News &  Annoucements' , iconSrc:require('../assets/images/newspaper.png') , color:'yellow' },
  { id:2 , url:'medical' ,title:'Medical Services' , iconSrc:require('../assets/images/newspaper.png') , color :'red' },
  { id:3 , url:'eservice', title:'E-Service' , iconSrc:require('../assets/images/newspaper.png') , color:'green' },
  { id:4 , url:'incident', title:'Incident Module' , iconSrc:require('../assets/images/newspaper.png') , color:'blue' },
  { id:5 , url:'gallery', title:'Gallery' , iconSrc:require('../assets/images/newspaper.png') , color:'dodgerblue' },
  { id:6 , url:'map', title:'LFZ Map' , iconSrc:require('../assets/images/newspaper.png') , color:'violet' },
  { id:6 , url:'events',title:'Events' , iconSrc:require('../assets/images/newspaper.png') , color:'orange' },
  { id:6 , url:'sustainability',title:'Sustainability' , iconSrc:require('../assets/images/newspaper.png') , color:'red' },
  { id:6 , url:'directory',title:'Directory' , iconSrc:require('../assets/images/newspaper.png') , color:'green' },
]

export default function App() {
  return (
    <View style={styles.container}>
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
