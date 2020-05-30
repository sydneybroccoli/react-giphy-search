import React from 'react';

export class SearchBar extends React.Component {
  handleKeyUp(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onKeyUp={this.handleKeyUp} />
    );
  }
}
