import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.info];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.title !== action.info.title)];
    default:
      return state;
  }
};

const addBook = () => ({
  type: ADD_BOOK,
  info: {
    title: 'new book',
    author: 'new author',
    id: uuidv4(),
  },
});

const removeBook = () => ({
  type: REMOVE_BOOK,
  info: {
    title: 'new book',
  },
});

export default bookReducer;
export { addBook, removeBook };
