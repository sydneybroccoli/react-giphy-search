import React from 'react';

import giphy from 'giphy-api';
import { SearchBar } from './searchbar.jsx';
import { GifList } from './gif_list.jsx';
import { Gif } from './gif.jsx';

const DEFAULT_SEARCH = "animals";
const GIPHY_API = 'SzlFIyU01Cjvs0gI1dKIz3lv0y8eMWdq';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      activeGif: { id: null }
    };
    this.search = this.search.bind(this);
    this.select = this.select.bind(this);

    // DEFAULT VALUES
    this.default();
  }

  // API CALL
  search(query) {
    giphy({ api_key: GIPHY_API, https: true }).search(
    {
      q: query,
      rating: 'pg-13',
      limit: 15
    }, (error, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }

  // SELECT GIF
  select(id) {
    this.setState({
      activeGif: { id: id }
    })
  }

  // DEFAULT VALUES
  default() {
    this.search(DEFAULT_SEARCH);
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
          <GifList gifs={this.state.gifs} selected={this.select} />
        </div>
      </div>
    );
  }
}
