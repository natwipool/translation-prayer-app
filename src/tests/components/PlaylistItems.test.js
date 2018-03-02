import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistItems } from '../../components/PlaylistItems';
import transPrayers from '../fixtures/transPrayers';
import playlists from '../fixtures/playlists';

test('should render PlaylistItems correctly', () => {
  const wrapper = shallow(<PlaylistItems transPrayers={transPrayers} playlist={playlists[2]} />);
  expect(wrapper).toMatchSnapshot();
});