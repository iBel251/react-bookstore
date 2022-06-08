import './styles/App.css';
import '@fontsource/roboto-slab';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="Books" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
