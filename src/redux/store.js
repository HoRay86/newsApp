import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import newsReducer from './slices/NewsSlice'
import newsSaga from './saga/NewsSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(newsSaga);