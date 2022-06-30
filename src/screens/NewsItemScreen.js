import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { addToFavorites } from '../redux/slices/NewsSlice'


const NewsItemScreen = ({route}) => {
  
  const {articleUrl} = route.params
  const article = useSelector(state=>state.news.news.find(article=> article.url === articleUrl))

  const isInFavorites = useSelector(state=> state.news.favorites.some(article=> article.url === articleUrl))
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
         <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
          <ImageBackground style={styles.image} source={{ uri: article.urlToImage}}>
              <View style={styles.titleContainer}>
                <Text style={styles.author}>{article.author}</Text>
                <Icon 
                    name={ isInFavorites? 'heart' : 'heart-outline' }
                    size={20} color="#00E3E3"
                    onPress={()=> {dispatch(addToFavorites(article.url))}}
                />
              </View>
          </ImageBackground>
      </View>
      <View style={styles.description}>
      <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
      
    </View>
  )
}

export default NewsItemScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginVertical:20,
  },
  heading:{
    marginHorizontal:20,
    marginBottom:10,
  },
  title:{
    fontFamily:'LeagueGothic-Regular',
    fontSize:24,
    fontWeight: 'bold',
    // letterSpacing:1.3,
  },
  image:{
    width: '100%',
    height: 200,
    justifyContent: 'flex-end'
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal:10,
    paddingVertical:5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  author:{
    fontFamily:'LeagueGothic-Regular',
    fontSize: 20,
    letterSpacing:1.2, 
    color: 'white',
  },
  description:{
    margin:10,
  },
  descriptionText:{
    fontSize: 18,
  },
})