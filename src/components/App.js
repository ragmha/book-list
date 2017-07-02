import React, { Component } from "react";

import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
