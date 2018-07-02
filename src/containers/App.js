import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

// import { BrowserRouter } from 'react-router';
// import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div id="app-root" className="flex-item yes-grow flex-container col">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
