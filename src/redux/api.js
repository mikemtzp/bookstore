import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ql3joiren1oNjSFu10EG';

const createBookList = (data) => {
  const result = [];
  const keys = Object.keys(data);

  keys.forEach((item) => {
    result.push({
      title: data[item][0].title,
      author: data[item][0].author,
      id: item,
      category: data[item][0].category,
    });
  });
  return result;
};

const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await fetch(`${apiUrl}/books`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createBookList(data);
  },
);

const addBooksThunk = createAsyncThunk(
  'books/addBooks',
  async (payload, thunkAPI) => {
    fetch(`${apiUrl}/books`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      thunkAPI.dispatch(getBooks());
    });
  },
);

const removeBooksThunk = createAsyncThunk(
  'books/removeBooks',
  async (payload, thunkAPI) => {
    fetch(`${apiUrl}/books/${payload}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: payload }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      thunkAPI.dispatch(getBooks());
    });
  },
);

export { getBooks, addBooksThunk, removeBooksThunk };
