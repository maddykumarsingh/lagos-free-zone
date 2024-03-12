import { FlatList } from 'react-native'
import React from 'react'
import ImageTile from './ImageTile'

export default Gallery = ({ images }) => {
  return (
    <FlatList  numColumns={2} data={images} keyExtractor={ (menu , index ) => index.toString()} renderItem={({item}) => <ImageTile source={item} />  } ></FlatList>
  )
}
