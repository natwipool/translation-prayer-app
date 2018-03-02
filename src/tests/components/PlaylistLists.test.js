import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistLists } from '../../components/PlaylistLists';
import playlists from '../fixtures/playlists';

test('should render PlaylistLists with playlists', () => {
  const wrapper = shallow(<PlaylistLists playlists={playlists} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render PlaylistLists with no playlist', () => {
  const wrapper = shallow(<PlaylistLists playlists={[]} />);
  expect(wrapper).toMatchSnapshot();
});
