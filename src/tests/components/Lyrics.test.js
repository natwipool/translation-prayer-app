import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from '../../components/Lyrics';
import transPrayers from '../fixtures/transPrayers';

test('should render Lyrics correctly', () => {
  const wrapper = shallow(<Lyrics transPrayers={transPrayers} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Lyrics with no playlist', () => {
  const wrapper = shallow(<Lyrics transPrayers={[]} />);
  expect(wrapper).toMatchSnapshot();
});