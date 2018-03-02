import playlistsReducer from '../../reducers/playlists';
import playlists from '../fixtures/playlists';

test('should set default state', () => {
  const state = playlistsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove playlist by id', () => {
  const action = {
    type: 'REMOVE_PLAYLIST',
    id: playlists[1].id
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual([playlists[0], playlists[2]]);
});

test('should not remove playlist if id not found', () => {
  const action = {
    type: 'REMOVE_PLAYLIST',
    id: '123'
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual(playlists);
});

test('should add a playlist', () => {
  const playlist = {
    id: '108',
    name: 'Playlist Number 108',
    lists: ['123', '456', '789']
  };
  const action = {
    type: 'ADD_PLAYLIST',
    playlist
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual([...playlists, playlist]);
});

test('should edit a playlist by id', () => {
  const name = 'Update playlist name';
  const action = {
    type: 'EDIT_PLAYLIST',
    id: playlists[2].id,
    updates: { name }
  };
  const state = playlistsReducer(playlists, action);
  expect(state[2].name).toBe(name);
});

test('should not edit a playlist if id not found', () => {
  const name = 'Update playlist name';
  const action = {
    type: 'EDIT_PLAYLIST',
    id: '123',
    updates: { name }
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual(playlists);
});
