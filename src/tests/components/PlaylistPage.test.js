import React from 'react';
import { shallow } from 'enzyme';
import PlaylistPage from '../../components/PlaylistPage';

test('should render PlaylistPage correctly', () => {
  const wrapper = shallow(<PlaylistPage />);
  expect(wrapper).toMatchSnapshot();
});