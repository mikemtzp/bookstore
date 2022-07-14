import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBooksThunk } from '../redux/api';

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
    <form onSubmit={newBook}>
      <input type="text" name="title" placeholder="Book title" required />
      <input type="text" name="author" placeholder="Author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BookInput;
