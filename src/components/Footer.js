import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="flex-item flex-container col">
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
      </footer>
    );
  }
}

export default Footer;
