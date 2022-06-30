import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

const FavoritesScreen = (props) => {
  const favorites = useSelector(state=>state.news.favorites);
  return (
    <FlatList
        data = {favorites}
        keyExtractor={item=>item.url}
        renderItem={({item})=>
          <Card 
            navigation={props.navigation}
            title={item.title}
            description={item.description}
            imgUrl={item.urlToImage}
            url={item.url}
          />}
    /> 
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})