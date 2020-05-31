import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    this.props.query(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onKeyUp={this.handleKeyUp} value="animals" />
    );
  }
}
