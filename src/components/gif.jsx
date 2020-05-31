import React from 'react';

export class Gif extends React.Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.props.onClick} id={this.props.id} />
    );
  }
}
