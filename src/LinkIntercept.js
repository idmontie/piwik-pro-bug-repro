import React, { Component } from 'react';

export default class LinkIntercept extends Component {
  onClick = (e) => {
    e.preventDefault();

    window.open('http://google.com', 'Google', 'left=1');
  }

  render() {
    return (
      <a
        href="https://google.com"
        id="anchor-target"
        onClick={this.onClick}
      >
        Open Google in New Tab
      </a>
    );
  }
}