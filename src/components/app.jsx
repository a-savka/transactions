import React, {Component} from 'react';
import Header from './header';

require('../stylesheets/app.scss');

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">Hello from my app!</div>
      </div>
    );
  }

}
