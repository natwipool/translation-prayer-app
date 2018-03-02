import uuid from 'uuid';

// ADD_PLAYLIST
export const addPlaylist = ({ name = '', lists = [] } = {}) => ({
  type: 'ADD_PLAYLIST',
  playlist: {
    id: uuid(),
    name,
    lists
  }
});

// REMOVE_PLAYLIST
export const removePlaylist = ({ id } = {}) => ({
  type: 'REMOVE_PLAYLIST',
  id
});

// EDIT_PLAYLIST
export const editPlaylist = (id, updates) => ({
  type: 'EDIT_PLAYLIST',
  id,
  updates
});
