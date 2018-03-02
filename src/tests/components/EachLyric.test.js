import React from 'react';
import { shallow } from 'enzyme';
import EachLyric from '../../components/EachLyric';
import transPrayers from '../fixtures/transPrayers';

test('should render EachLyric correctly', () => {
  const wrapper = shallow(<EachLyric lyric={transPrayers[2].lyrics[0]}/>);
  expect(wrapper).toMatchSnapshot();
});