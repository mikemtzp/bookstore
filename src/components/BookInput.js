import React from 'react';

class BookInput extends React.PureComponent {
  render() {
    return (
      <form>
        <input placeholder="Book title" required />
        <input placeholder="Author" required />
        <button type="submit">ADD BOOK</button>
      </form>
    );
  }
}

export default BookInput;
