import {
  addPlaylist,
  editPlaylist,
  removePlaylist
} from '../../actions/playlists';

test('should setup remove playlist action object', () => {
  const action = removePlaylist({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_PLAYLIST',
    id: '123abc'
  });
});

test('should setup edit playlist action object', () => {
  const action = editPlaylist('123abc', { name: 'New name value' });
  expect(action).toEqual({
    type: 'EDIT_PLAYLIST',
    id: '123abc',
    updates: {
      name: 'New name value'
    }
  });
});

test('should setup add playlist action object with provided object', () => {
  const playlistData = {
    name: 'New name value',
    lists: ['abc', 'def', 'ghi']
  }
  const action = addPlaylist(playlistData);
  expect(action).toEqual({
    type: 'ADD_PLAYLIST',
    playlist: {
      ...playlistData,
      id: expect.any(String)
    }
  })
});

test('should setup add playlist action object with default value', () => {
  const action = addPlaylist();
  expect(action).toEqual({
    type: 'ADD_PLAYLIST',
    playlist: {
      name: '',
      lists: [],
      id: expect.any(String)
    }
  })
});
