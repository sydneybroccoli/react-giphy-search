import React from 'react';

import { SearchBar } from './searchbar.jsx';
import { GifList } from './gif_list.jsx';
import { Gif } from './gif.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: 'xTiTnB1aEUVOtf7bQA' },
        { id: 'VqabblvEyrHby' }

      ],
      activeGif: { id: 'xTiTnB1aEUVOtf7bQA' }
    };
  }

  // API CALL
  search(query) {

  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="active-gif">
            <Gif id={this.state.activeGif.id} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
