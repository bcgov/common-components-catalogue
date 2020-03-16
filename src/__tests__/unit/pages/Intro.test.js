import React from 'react';
import { shallow } from 'enzyme';

import Intro from '../../../pages/Intro';

describe('Intro - unit', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).toMatchSnapshot();
  });
});
