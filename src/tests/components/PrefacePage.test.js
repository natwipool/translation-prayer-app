import React from 'react';
import { shallow } from 'enzyme';
import PrefacePage from '../../components/PrefacePage';

test('should render PrefacePage correctly', () => {
  const wrapper = shallow(<PrefacePage />);
  expect(wrapper).toMatchSnapshot();
});