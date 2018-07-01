import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../Footer';

describe("Footer", function () {

  it('renders without crashing', () => {
    let mountedFooter = shallow(<Footer />);
  });

});
