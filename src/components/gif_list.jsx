import React from 'react';

import { Gif } from './gif.jsx';

export class GifList extends React.Component {
  render() {
    return(
      <div className="gif-list">
        {this.props.gifs.map( gif => {
          return <Gif id={gif.id} key={gif.id} /> })}
      </div>
    );
  }
}
