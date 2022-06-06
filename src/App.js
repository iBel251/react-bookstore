import './App.css';
import store from './redux/configureStore';
import { addBook, removeBook } from './redux/books/Books';

const Test = () => {
  store.subscribe(() => console.log('Updated state', store.getState()));
  console.log('Initial state', store.getState());
  store.dispatch(addBook());
  store.dispatch(removeBook());
};
function App() {
  return (
    <Test />
  );
}

export default App;
