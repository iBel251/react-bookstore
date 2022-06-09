import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
