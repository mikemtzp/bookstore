const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

const addBook = (title) => ({ type: ADD_BOOK, payload: title });

const removeBook = (title) => ({ type: REMOVE_BOOK, payload: title });

export default books;
export { addBook, removeBook };
