import { combineReducers } from "redux";
import books from "./books";

// Maping of state of reudcer (books (state) : books (reducer))
const rootReducer = combineReducers({
  books
});

export default rootReducer;
