import React from 'react';
import { shallow } from 'enzyme';
import PlaylistItem from '../../components/PlaylistItem';
import playlists from '../fixtures/playlists';

test('should render PlaylistItem correctly', () => {
  const wrapper = shallow(<PlaylistItem transPrayerList={playlists[1]} />);
  expect(wrapper).toMatchSnapshot();
});