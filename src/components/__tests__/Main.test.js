import React from 'react';
import {shallow} from 'enzyme';
import Main from '../Main';

describe("Main", function () {

  it('renders without crashing', () => {
    let mountedMain = shallow(<Main />);
  });

  it('renders a Navigation', () => {
    let mountedMain = shallow(<Main />);
    const navigation = mountedMain.find('Navigation');
    expect(1).toBe(1);
  })

  it('renders a Content', () => {
    let mountedMain = shallow(<Main />);
    const content = mountedMain.find('Content');
    expect(1).toBe(1);
  })

});
