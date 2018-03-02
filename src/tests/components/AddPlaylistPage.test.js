import React from 'react';
import { shallow } from 'enzyme';
import { AddPlaylistPage } from '../../components/AddPlaylistPage';
import playlists from '../fixtures/playlists';

test('should render AddPlaylistPage correctly', () => {
  const addPlaylist = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddPlaylistPage onSubmit={addPlaylist} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle addPlaylist correctly', () => {
  const addPlaylist = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddPlaylistPage onSubmit={addPlaylist} history={history} />
  );
  wrapper.find('Connect(PlaylistForm)').prop('onSubmit')(playlists[2]);
  expect(history.push).toHaveBeenCalledWith('/playlists');
  expect(addPlaylist).toHaveBeenLastCalledWith(playlists[2]);
});
