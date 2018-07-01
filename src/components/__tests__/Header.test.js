import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';

describe("Header", function () {

  it('renders without crashing', () => {
    let mountedHeader = shallow(<Header />);
  });

});
