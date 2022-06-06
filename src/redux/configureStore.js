import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './categories/Categories';
import bookReducer from './books/Books';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
