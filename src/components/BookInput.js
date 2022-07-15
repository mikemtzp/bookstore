import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBooksThunk } from '../redux/api';
import './BookInput.css';

const BookInput = () => {
  const dispatch = useDispatch();

  const createBook = (title, author) => ({
    title,
    author,
    item_id: nanoid(),
    category: 'TBD',
  });

  const newBook = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    dispatch(addBooksThunk(createBook(title, author)));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div className="input-section">
      <span className="line" />
      <p className="input-title">ADD NEW BOOK</p>
      <form className="add-form" onSubmit={newBook}>
        <input className="title-input input" type="text" name="title" placeholder="Book title" required />
        <input className="author-input input" type="text" name="author" placeholder="Author" required />
        <button className="add-button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookInput;
