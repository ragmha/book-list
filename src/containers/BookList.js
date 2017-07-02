import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    const { books, selectBook } = this.props;

    return books.map(book =>
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => selectBook(book)}
      >
        {book.title}
      </li>
    );
  }
  render() {
    return (
      <div className="bookList">
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

// Glue between react and redux
// State changes -> it automatically re-renders
// returned value as props inside BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function ends up props
// When select book is called, result is passed to all reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectBook
    },
    dispatch
  );
}

// Promote BookList from a component to container
// It needs to know dispatch method, selectBook
// Makes it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
