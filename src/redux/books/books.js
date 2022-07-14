import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from '../api';

const initialState = {
  books: [],
  status: null,
};

const books = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { addBook, removeBook } = books.actions;
export default books;
