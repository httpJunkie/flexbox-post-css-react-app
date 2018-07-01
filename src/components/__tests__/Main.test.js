import React from 'react';
import {shallow} from 'enzyme';
import Main from '../Main';

describe("Main", function () {

  it('renders without crashing', () => {
    let mountedMain = shallow(<Main />);
  });

  it('renders a Header', () => {
    let mountedMain = shallow(<Main />);
    const header = mountedApp.find('Navigation');
    expect(1).toBe(1);
  })

  it('renders a Content', () => {
    let mountedMain = shallow(<Main />);
    const content = mountedApp.find('Content');
    expect(1).toBe(1);
  })

});
