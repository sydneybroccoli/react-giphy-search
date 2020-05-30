import React from 'react';
import { SearchBar } from './searchbar.jsx';

export class App extends React.Component {
  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="active-gif">

          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">

          </div>
        </div>
      </div>
    );
  }
}
