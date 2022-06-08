import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/Books">Books</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
    </div>
  );
}
