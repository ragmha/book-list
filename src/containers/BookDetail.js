import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>
          <br />
          <br />
          <center>
            <h3> Select a Book</h3>
          </center>
        </div>
      );
    }
    return (
      <div className="bookDetail">
        <img src={this.props.book.img} alt="" />
        <div>
          {this.props.book.title}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
