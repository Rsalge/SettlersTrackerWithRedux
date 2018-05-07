import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import standardRules from "../rules/standardRules.pdf";
export default class StandardRules extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  handleClick(direction) {
    let pageNumber = this.state.pageNumber + direction;
    if (pageNumber <= this.state.numPages && pageNumber > 0) {
      this.setState({ pageNumber });
    }
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document file={standardRules} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button value="Page Up" onClick={() => this.handleClick(1)}>
          Page Up
        </button>
        <button value="Page Down" onClick={() => this.handleClick(-1)}>
          {" "}
          Page Down
        </button>
      </div>
    );
  }
}
