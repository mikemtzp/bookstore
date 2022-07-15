import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/api';
import BookInput from '../components/BookInput';
import Book from '../components/Book';

const BooksContainer = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <section style={{ padding: '1.5rem 5rem' }}>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.id}
            id={book.id}
          />
        ))}
      </ul>
      <BookInput />
    </section>
  );
};

export default BooksContainer;
