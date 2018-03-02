import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistList } from '../../components/PlaylistList';
import playlists from '../fixtures/playlists';

test('should render PlaylistList correctly', () => {
  const wrapper = shallow(<PlaylistList {...playlists[1]} />);
  expect(wrapper).toMatchSnapshot();
});