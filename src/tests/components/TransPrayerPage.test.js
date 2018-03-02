import React from 'react';
import { shallow } from 'enzyme';
import TransPrayerPage from '../../components/TransPrayerPage';

test('should render TransPrayerPage correctly', () => {
  const wrapper = shallow(<TransPrayerPage />);
  expect(wrapper).toMatchSnapshot();
});