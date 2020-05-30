import React from 'react';

import giphy from 'giphy-api';
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
    this.search = this.search.bind(this);
  }

  // API CALL
  search(query) {
    giphy('SzlFIyU01Cjvs0gI1dKIz3lv0y8eMWdq').search(
    {
      q: query,
      rating: 'pg-13',
      limit: 10
    },
    (error, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar query={this.search} />
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
