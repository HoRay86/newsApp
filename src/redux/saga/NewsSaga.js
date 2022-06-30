import {call, put, takeEvery } from 'redux-saga/effects'
import {getNewsFetch, getNewsSuccess} from '../slices/NewsSlice'

function* workGetNewsFetch(){
    const news = yield call(()=> fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=383837f2f5694b709a7524a857329f2a'))
    const formattedNews = yield news.json()
    yield put(getNewsSuccess(formattedNews.articles));
}

function* newsSaga(){
    yield takeEvery(getNewsFetch.type, workGetNewsFetch);
}

export default newsSaga;