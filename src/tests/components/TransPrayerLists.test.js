import React from 'react';
import { shallow } from 'enzyme';
import { TransPrayerLists } from '../../components/TransPrayerLists';
import transPrayers from '../fixtures/transPrayers';
import playlists from '../fixtures/playlists';

test('should render TransPrayerLists correctly', () => {
  const wrapper = shallow(<TransPrayerLists transPrayers={transPrayers} />);
  expect(wrapper).toMatchSnapshot();
});