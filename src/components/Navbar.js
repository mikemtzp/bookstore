import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => (
  <nav className="main-container">
    <div className="nav-container">
      <h1>
        <Link to="/" className="logo">
          Bookstore CMS
        </Link>
      </h1>
      <ul className="nav-sections">
        <li>
          <Link to="/" className="sections">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="sections">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className="user-icon">
      <FaUserAlt />
    </div>
  </nav>
);

export default Navbar;
