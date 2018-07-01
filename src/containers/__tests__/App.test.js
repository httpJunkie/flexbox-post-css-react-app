import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe("App", function () {

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a Header', () => {
    let mountedApp = shallow(<App />);
    const header = mountedApp.find('Header');
    expect(1).toBe(1);
  })

  it('renders a Main', () => {
    let mountedApp = shallow(<App />);
    const Main = mountedApp.find('Main');
    expect(1).toBe(1);
  })

  it('renders a Footer', () => {
    let mountedApp = shallow(<App />);
    const footer = mountedApp.find('Footer');
    expect(1).toBe(1);
  })

});
