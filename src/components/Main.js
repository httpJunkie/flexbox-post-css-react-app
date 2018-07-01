import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

class Main extends Component {
  render() {
    return (
      <main className="flex-item flex-container row main">
        <Navigation />
        <Content />
      </main>
    );
  }
}

export default Main;
