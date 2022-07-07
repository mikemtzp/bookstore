import React from 'react';
import BookList from './BookList';
import BookInput from './BookInput';

class BooksContainer extends React.PureComponent {
  render() {
    return (
      <section>
        <BookList />
        <BookInput />
      </section>
    );
  }
}

export default BooksContainer;
