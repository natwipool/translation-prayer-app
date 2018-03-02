import React from 'react';
import { shallow } from 'enzyme';
import { EditPlaylistPage } from '../../components/EditPlaylistPage';
import playlists from '../fixtures/playlists';

test('should render EditPlaylistPage correctly', () => {
  const editPlaylist = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <EditPlaylistPage
      editPlaylist={editPlaylist}
      history={history}
      playlist={playlists[0]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle editPlaylist correctly', () => {
  const editPlaylist = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <EditPlaylistPage
      editPlaylist={editPlaylist}
      history={history}
      playlist={playlists[0]}
    />
  );
  wrapper.find('Connect(PlaylistForm)').prop('onSubmit')(playlists[0]);
  expect(history.push).toHaveBeenCalledWith(`/playlist/${playlists[0].id}`);
  expect(editPlaylist).toHaveBeenLastCalledWith(playlists[0].id, playlists[0]);
});
