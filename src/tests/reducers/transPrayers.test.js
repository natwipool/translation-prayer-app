import transPrayersReducer from '../../reducers/transPrayers';

test('should set default state', () => {
  const state = transPrayersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set transPrayer', () => {
  const transPrayers = [{
    id: '18',
    precept: 'ปฐมพุทธภาสิตคาถา',
    category: 'บทสวดมนต์ภาคเย็น',
    filename: '18_ปฐมพุทธภาสิตคาถา.mp3',
    lyrics: ['123', '456']
  }, {
    id: '19',
    precept: 'ปัจฉิมพุทโธวาทปาฐะ',
    category: 'บทสวดมนต์ภาคเย็น',
    filename: '19_ปัจฉิมพุทโธวาทปาฐะ.mp3',
    lyrics: ['abc', 'def']
  }];
  const action = {
    type: 'SET_TRANS_PRAYER',
    transPrayers
  };
  const state = transPrayersReducer(undefined, action);
  expect(state).toEqual(transPrayers);
});