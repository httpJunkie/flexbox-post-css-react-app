import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  render() {
    return (
      <header className="flex-item flex-container col">
        <div className="flex-item flex-container height-100">
          <div className="flex-item flex-container horiz-start vert-center">
            <div className="width-100">
              <span className="title">PORTFOLIO</span>
            </div>
          </div>
          <div className="flex-item flex-container vert-center">
            <div className="text-right width-100 horiz-end padding-right-1">
              <FontAwesome name='twitter-square' />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
