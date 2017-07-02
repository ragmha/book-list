import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    const { books } = this.props;

    return books.map(book =>
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    );
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
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

// returns a container
export default connect(mapStateToProps)(BookList);
