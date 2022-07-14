import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksThunk } from '../redux/api';

const Book = (props) => {
  const dispatch = useDispatch();

  const { title, author, id } = props;

  const deleteButton = () => {
    dispatch(removeBooksThunk(id));
  };

  return (
    <li>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => deleteButton()}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
