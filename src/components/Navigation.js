import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <aside className="flex-item flex-container col left-nav">
        <header className="flex-item no-grow">
          <p>Vestibulum iaculis vel elit lobortis, sagittis est titales urna nissin eget dui pharet.</p>
        </header>
        <nav className="flex-item">
          <ul>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">resume</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">references</a></li>
            <li><a href="#">projects</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Navigation;
