import React from 'react';

import { SearchBar } from './searchbar.jsx';
import { GifList } from './gif_list.jsx';
import { Gif } from './gif.jsx';

export class App extends React.Component {
  render() {
    const gifs = [
      { id: 'xTiTnB1aEUVOtf7bQA' },
      { id: 'VqabblvEyrHby' }
    ];

    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="active-gif">
            <Gif id="xTiTnB1aEUVOtf7bQA" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}
