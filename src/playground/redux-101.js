import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import transPrayerdata from '../data/transPlayerData';

// SET_TRANS_PRAYER
const setTransPrayer = (transPrayers = {}) => ({
  type: 'SET_TRANS_PRAYER',
  transPrayers
});

// ADD_PLAYLIST
const addPlaylist = ({ name = '', list = [] } = {}) => ({
  type: 'ADD_PLAYLIST',
  playlist: {
    id: uuid(),
    name,
    list
  }
});

// REMOVE_PLAYLIST
const removePlaylist = ({ id } = {}) => ({
  type: 'REMOVE_PLAYLIST',
  id
});

// EDIT_PLAYLIST
const editPlaylist = (id, updates) => ({
  type: 'EDIT_PLAYLIST',
  id,
  updates
});

// show_BY_ALL ทั้งหมด
const showByAll = () => ({
  type: 'SHOW_BY_ALL'
});

// show_BY_PREFACE  ปุพพภาค
const showByPreface = () => ({
  type: 'SHOW_BY_PREFACE'
});

// show_BY_MORNING_PRAYER คำทำวัตรเช้า
const showByMorningPrayer = () => ({
  type: 'SHOW_BY_MORNING_PRAYER'
});

// show_BY_EVENING_PRAYER  คำทำวัตรเย็น
const showByEveningPrayer = () => ({
  type: 'SHOW_BY_EVENING_PRAYER'
});

// show_BY_SPECIAL_PRAYER บทสวดมนต์พิเศษบางบท
const showBySpecialPrayer = () => ({
  type: 'SHOW_BY_SPECIAL_PRAYER'
});

// show_BY_APPENDIX ภาคผนวก
const showByAppendix = () => ({
  type: 'SHOW_BY_APPENDIX'
});

const transPrayerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANS_PRAYER':
      return state.concat(action.transPrayers);
    default:
      return state;
  }
};

const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return [...state, action.playlist];
    case 'REMOVE_PLAYLIST':
      return state.filter(playlist => playlist.id !== action.id);
    case 'EDIT_PLAYLIST':
      return state.map(playlist => {
        if (playlist.id === action.id) {
          return {
            ...playlist,
            ...action.updates
          };
        } else {
          return playlist
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  showBy: 'ทั้งหมด'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_BY_ALL':
      return {
        showBy: 'ทั้งหมด'
      };
    case 'SHOW_BY_PREFACE':
      return {
        showBy: 'ปุพพภาค'
      };
    case 'SHOW_BY_MORNING_PRAYER':
      return {
        showBy: 'คำทำวัตรเช้า'
      };
    case 'SHOW_BY_EVENING_PRAYER':
      return {
        showBy: 'คำทำวัตรเย็น'
      };
    case 'SHOW_BY_SPECIAL_PRAYER':
      return {
        showBy: 'บทสวดมนต์พิเศษบางบท'
      };
    case 'SHOW_BY_APPENDIX':
      return {
        showBy: 'ภาคผนวก'
      };
    default:
      return state;
  }
};

// Get Visible Trans-Prayer by category

const getVisibleTransPrayer = (transPrayers, { showBy }) => {
  if (showBy === 'ทั้งหมด') {
    return transPrayers
  } else {
    return transPrayers.filter((transPrayer) => {
      return transPrayer.category === showBy
    });
  }
};

const store = createStore(
  combineReducers({
    transPrayers: transPrayerReducer,
    playlists: playlistReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleTransPrayer = getVisibleTransPrayer(state.transPrayers, state.filters);
  console.log(visibleTransPrayer)
});

store.dispatch(setTransPrayer(transPrayerdata));

// const playlist1 = store.dispatch(
//   addPlaylist({ name: 'Test Playlist', list: ['123', 'abc'] })
// );
// const playlist2 = store.dispatch(
//   addPlaylist({ name: 'Test Playlist 2', list: ['123', 'abc'] })
// );

// store.dispatch(removePlaylist({ id: playlist2.playlist.id }));

// store.dispatch(
//   editPlaylist(playlist1.playlist.id, {
//     name: 'New updated name',
//     list: ['321', 'cba']
//   })
// );

// store.dispatch(showByAll());
store.dispatch(showByPreface());
store.dispatch(showByMorningPrayer());
store.dispatch(showByEveningPrayer());
store.dispatch(showBySpecialPrayer());
store.dispatch(showByAppendix());
store.dispatch(showByAll());

const demoState = {
  transPrayers: [
    {
      precept: 'คำบูชาพระรัตนตรัย',
      category: 'คำทำวัตรเช้า',
      filename: '123.mp3',
      duration: 0,
      lyrics: []
    }
  ],
  playlist: [
    {
      id: 'af12423',
      name: '123abc',
      list: []
    }
  ],
  filters: {
    showBy: 'ทั้งหมด' // ทั้งหมด, ปุพพภาค, คำทำวัตรเช้า, คำทำวัตรเย็น, บทสวดมนต์พิเศษบางบท, ภาคผนวก
  }
};

// const store = createStore((state = { transPrayerData: [] }, action) => {
//   switch (action.type) {
//     case 'SET':
//       return {
//         transPrayerData: action.transPrayerData
//       }
//     default:
//       return state
//   }
// });

// store.dispatch({
//   type: 'SET',
//   transPrayerData
// });

// console.log(store.getState());
