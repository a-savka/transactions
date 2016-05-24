import React, { Component } from 'react';
import Header from './header';

export default class PageLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }

}
