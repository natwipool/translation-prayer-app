import { createStore, combineReducers } from 'redux';
import transPrayerReducer from '../reducers/transPrayers';
import playlistReducer from '../reducers/playlists';

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayerReducer,
      playlists: playlistReducer
    })
  );

  return store;
}


