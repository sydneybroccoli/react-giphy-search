import React from 'react';
import { SearchBar } from './searchbar.jsx';
import { Gif } from './gif.jsx';

export class App extends React.Component {
  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="active-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <Gif />
          </div>
        </div>
      </div>
    );
  }
}
