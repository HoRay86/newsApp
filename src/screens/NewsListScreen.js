import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import Card from '../components/Card'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsFetch } from '../redux/slices/NewsSlice'

const NewsListScreen = (props) => {
    const news = useSelector(state=> state.news.news);
    const dispatch = useDispatch();
   
    useEffect(()=>{
      dispatch(getNewsFetch());
    },[dispatch])
    // console.log("----", news)
  
    return (
      <FlatList
         data = {news}
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
      // <View>
      //     <Card navigation={props.navigation}/>    
      // </View>
    )
}

export default NewsListScreen

const styles = StyleSheet.create({})