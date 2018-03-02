import setTransPrayer from '../../actions/transPrayers';

test('should setup transPrayers action object', () => {
  const transPrayerData = {
    id: '01',
    precept: 'คำทำวัตรเช้า',
    category: 'คำทำวัตรเช้า',
    filename: '01_คำทำวัตรเช้า.mp3',
    lyrics: []
  };
  const action = setTransPrayer(transPrayerData);
  expect(action).toEqual({
    type: 'SET_TRANS_PRAYER',
    transPrayers: {
      ...transPrayerData
    }
  });
});
