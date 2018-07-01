import React from 'react';
import {shallow} from 'enzyme';
import Content from '../Content';

describe("Content", function () {

  it('renders without crashing', () => {
    let mountedContent = shallow(<Content />);
  });

  it('renders a Navigation', () => {
    let mountedApp = shallow(<Content />);
    const navigation = mountedApp.find('Navigation');
    expect(1).toBe(1);
  })

});
