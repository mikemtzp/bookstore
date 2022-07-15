import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksThunk } from '../redux/api';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    title, author, id, category,
  } = props;

  const deleteButton = () => {
    dispatch(removeBooksThunk(id));
  };

  return (
    <li className="book">
      <div className="book-data">
        <h3 className="category">{category}</h3>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <button className="tool-button" type="button">
          Comments
        </button>
        <span className="button-divisor">|</span>
        <button
          className="tool-button"
          type="button"
          onClick={() => deleteButton()}
        >
          Remove
        </button>
        <span className="button-divisor">|</span>
        <button className="tool-button" type="button">
          Edit
        </button>
      </div>
      <div className="book-percentage">
        <div className="percentage" />
        <div className="percentage-info">
          <p className="percentage-number">0%</p>
          <p className="percentage-text">Completed</p>
        </div>
      </div>
      <span className="book-divisor" />
      <div className="book-chapter">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 1</p>
        <button className="update-button" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
