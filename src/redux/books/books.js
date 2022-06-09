import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';
const BOOK_SHOW = 'bookstore/books/BOOK_SHOW';

// API
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'kz7CRrzJE0EHSkY6yCS1';

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
    case BOOK_SHOW:
      return action.data || state;
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

export const showBook = (data) => ({
  type: BOOK_SHOW,
  data,
});

export const fetchBook = () => (
  (dispatch) => {
    // Fetch (GET), then dispatch showBook action
    fetch(`${url}${appId}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(showBook(json)));
  }
);

export const addBookApi = (newBook) => (
  (dispatch) => {
    // Fetch (POST), then dispatch fetchBook action
    fetch(`${url}${appId}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        id: uuidv4(),
        category: newBook.category,
        progress: Math.floor(Math.random() * 100),
        currentChapter: `Chapter ${Math.floor(Math.random() * 15)}`,
      }),
    })
      .then(() => dispatch(fetchBook()));
  }
);

export default bookReducer;
export { addBook, removeBook };
