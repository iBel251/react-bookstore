import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    category: 'Science fiction',
    id: uuidv4(),
    progress: 75,
    currentChapter: 'Chapter 4',
  },
  {
    title: 'Beloved',
    author: 'Toni Morrison',
    category: 'Historical Fiction',
    id: uuidv4(),
    progress: 45,
    currentChapter: 'Chapter 2',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: 'Romance novel',
    id: uuidv4(),
    progress: 0,
    currentChapter: 'Chapter 1',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Tragedy',
    id: uuidv4(),
    progress: 4,
    currentChapter: 'Chapter 1',
  },
];

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.book_id)];
    default:
      return state;
  }
};

// Actions
const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: {
    title: newBook.title,
    author: newBook.author,
    id: uuidv4(),
    category: newBook.category,
    progress: Math.floor(Math.random() * 100),
    currentChapter: `Chapter ${Math.floor(Math.random() * 15)}`,
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    book_id: id,
  },
});

export default bookReducer;
export { addBook, removeBook };
