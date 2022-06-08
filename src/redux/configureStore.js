import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories.js';
import bookReducer from './books/books.js';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
