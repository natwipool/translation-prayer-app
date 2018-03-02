import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistForm } from '../../components/PlaylistForm';
import transPrayers from '../fixtures/transPrayers';
import playlists from '../fixtures/playlists';

test('should render PlaylistForm correctly', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render PlaylistForm correctly with playlists data', () => {
  const wrapper = shallow(
    <PlaylistForm transPrayers={transPrayers} playlist={playlists[1]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
  const value = 'New name'
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers} />);
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('name')).toBe(value);
});

test('should add lists on checkbox is checked', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers} />);
  wrapper.find('Checkbox').at(0).prop('onAddLists')('123');
  expect(wrapper.state('lists')).toEqual(['123']);
});

test('should remove list on checkbox is unchecked', () => {
  // playlists[1].lists = ['คำทำวัตรเย็น', 'อตีตปัจจเวกขณปาฐะ', 'สรณคมนปาฐะ']
  const wrapper = shallow(<PlaylistForm playlist={playlists[1]} transPrayers={transPrayers} />);
  wrapper.find('Checkbox').at(0).prop('onRemoveLists')('สรณคมนปาฐะ');
  expect(wrapper.state('lists')).toEqual(['คำทำวัตรเย็น', 'อตีตปัจจเวกขณปาฐะ']);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<PlaylistForm playlist={playlists[1]} transPrayers={transPrayers} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    name: playlists[1].name,
    lists: playlists[1].lists
  });
});
