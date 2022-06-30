import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux/slices/NewsSlice'

const Card = ({navigation, title, description, imgUrl, url}) => {
  const dispatch = useDispatch();
  const isInFavorites = useSelector(state=> state.news.favorites.some(article=> article.url === url))

  return (
    <TouchableOpacity 
        onPress={()=>{
             navigation.navigate('NewsItem',{articleUrl: url})
    }}>
         <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: imgUrl}}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {title.length > 25 ? title.slice(0,25)+'...' : title}
                </Text>
                <Icon 
                    name={ isInFavorites? 'heart' : 'heart-outline' }
                    size={20} color="#00E3E3"
                    onPress={()=> {dispatch(addToFavorites(url))}}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    {description.length > 130 ? description.slice(0,130)+'...' : description}

                </Text>
            </View>
        </View>
    </TouchableOpacity>
   
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius: 10,
        borderRadius:10,
        backgroundColor: "#ffffff",
        elevation: 5,
        height:300,
        margin: 20,
    },
    imageContainer:{
        width: "100%",
        height: "60%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: '100%',
    },
    titleContainer:{
        height: "10%",
        marginHorizontal:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText:{
        fontFamily:'LeagueGothic-Regular',
        fontWeight: 'bold',
        letterSpacing:1.3, 
        fontSize:20
    },
    descriptionContainer:{
        marginHorizontal:10
    },
    descriptionText:{
        fontFamily:'LeagueGothic_SemiCondensed-Regular',
        letterSpacing: 1.9, 
        fontSize:20
    },
})