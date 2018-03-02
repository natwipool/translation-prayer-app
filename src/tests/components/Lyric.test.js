import React from 'react';
import { shallow } from 'enzyme';
import Lyric from '../../components/Lyric';
import transPrayers from '../fixtures/transPrayers';

test('should render Lyric correctly', () => {
  const wrapper = shallow(<Lyric transPrayer={transPrayers[2]}/>);
  expect(wrapper).toMatchSnapshot();
});