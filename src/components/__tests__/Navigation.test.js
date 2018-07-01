import React from 'react';
import {shallow} from 'enzyme';
import Navigation from '../Navigation';

describe("Navigation", function () {

  it('renders without crashing', () => {
    let mountedNavigation = shallow(<Navigation />);
  });

});
