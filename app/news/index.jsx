import { View, Text , FlatList , Image , StyleSheet, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const news = [ 
  { id:'1' , thubmnail:"https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg", title:'Lagos Free Zone redefines ease of doing business in Nigeria', description:'' , articleLink:'' },
  { id:'2' , thubmnail:"https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg", title:'LEKKI DEEP SEAPORT RECEIVES LARGEST LNG VESSEL IN NIGERIA', description:'' , articleLink:'' },
  { id:'3' ,thubmnail:"https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg", title:'Lagos Free Zone redefines ease of doing business in Nigeria', description:'' , articleLink:'' },
  { id:'4' ,thubmnail:"https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg", title:'Lagos Free Zone redefines ease of doing business in Nigeria', description:'' , articleLink:'' },
  { id:'5' ,thubmnail:"https://www.lagosfreezone.com/media/1853/lekki-port-reinforces-lagos-position-as-investment-destination-sanwo-olu.jpeg", title:'Lagos Free Zone redefines ease of doing business in Nigeria', description:'' , articleLink:'' },
]

const NewsItem = ({ id , title , thubmnail , description}) => {
   const router = useRouter();
  return (<View style={{ width:'100%' , height:120 , marginVertical:10, flexDirection:'row'}}>
    <Image style={{width:100 , height:100 , marginRight:20 }} source={{ uri: thubmnail }}></Image>
    <View>

    <Text numberOfLines={2}>{title}</Text>
    <Text numberOfLines={3}>{description}</Text>
     <Button title='Read More' onPress={() => router.push('/news/'+ id)}>Read More</Button>
    </View>
  </View>)
}

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList data={news} keyExtractor={ news => news.id }  renderItem={({item}) => 
       <NewsItem id={item.id} title={item.title}  thubmnail={item.thubmnail}  description={item.description} articleLink={news.articleLink} />
    }></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     padding:10
  } 
})

export default NewsScreen