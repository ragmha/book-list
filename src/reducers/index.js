import { combineReducers } from "redux";
import activeBook from "./activeBook";
import books from "./books";

// Maping of state of reudcer (books (state) : books (reducer))
const rootReducer = combineReducers({
  books,
  activeBook
});

export default rootReducer;
