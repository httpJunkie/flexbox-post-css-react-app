import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex-item flex-container col">
        <div className="flex-item flex-container height-100">
          <div className="flex-item flex-container horiz-center vert-center">
            <div className="text-center width-80">left</div>
          </div>
          <div className="flex-item flex-container horiz-center vert-center">
            <div className="text-center width-80">middle</div>
          </div>
          <div className="flex-item flex-container horiz-center vert-center">
            <div className="text-center width-80">right</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
