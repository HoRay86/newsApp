import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    favorites:[],
    isLoading: false,
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{
        getNewsFetch:(state)=>{
            state.isLoading = true;
        },
        getNewsSuccess: (state, action) => {
            const newsData = action.payload;
            return { ...state, news: newsData, isLoading: true};
        },
        getNewsFailure: (state)=>{
            state.isLoading = false;
        },
        addToFavorites: (state, action)=>{
            const index = state.favorites.findIndex(newsArticle => newsArticle.url === action.payload)
            if(index>=0){ //已存在，需刪除
                const favorites = [...state.favorites];
                favorites.splice(index,1);
                return { ...state, favorites: favorites}
            }else{  //不存在，需加入
                const article = state.news.find(newsArticle=>newsArticle.url === action.payload);
                return {...state, favorites: state.favorites.concat(article)}
            }
        }

    }
})

export const { getNewsFetch, getNewsSuccess, getNewsFailure, addToFavorites } = NewsSlice.actions;

export default NewsSlice.reducer;