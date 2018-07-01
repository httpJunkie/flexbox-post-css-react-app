import React from 'react';
import {shallow} from 'enzyme';
import Content from '../Content';

describe("Content", function () {

  it('renders without crashing', () => {
    let mountedContent = shallow(<Content />);
  });

});
