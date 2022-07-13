import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R Tolkien',
      id: '29837928734',
    },
    {
      title: 'The Call of Cthulhu',
      author: 'H.P Lovecraft',
      id: 'uyed7273rrd2',
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      id: 'oijvow98934h7fe66',
    },
  ],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = books.actions;
export default books;
