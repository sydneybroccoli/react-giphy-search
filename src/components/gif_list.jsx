import React from 'react';

import { Gif } from './gif.jsx';

export class GifList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.selected(event.target.id);
  }

  render() {
    return(
      <div className="gif-list">
        {this.props.gifs.map( gif => {
          return <Gif id={gif.id} key={gif.id} onClick={this.handleClick} /> })}
      </div>
    );
  }
}
