import React from 'react';
import { shallow } from 'enzyme';
import TransPrayerListItem from '../../components/TransPrayerListItem';
import transPrayers from '../fixtures/transPrayers';

test('should render TransPrayerListItem correctly', () => {
  const wrapper = shallow(<TransPrayerListItem transPrayerList={transPrayers[0]} />);
  expect(wrapper).toMatchSnapshot();
});