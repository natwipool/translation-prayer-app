import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../components/Checkbox';
import transPrayers from '../fixtures/transPrayers';

test('should render Checkbox correctly', () => {
  const wrapper = shallow(<Checkbox lists={[]} {...transPrayers[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should get checked value on input checked', () => {
  const onAddListsSpy = jest.fn();
  const wrapper = shallow(<Checkbox lists={[]} {...transPrayers[1]} onAddLists={onAddListsSpy} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input[type="checkbox"]').simulate('change', {
    target: { checked: true }
  });
  expect(onAddListsSpy).toHaveBeenCalled();
});

test('should not get checked value on input unchecked', () => {
  const onRemoveListsSpy = jest.fn();
  const wrapper = shallow(<Checkbox lists={[]} {...transPrayers[1]} onRemoveLists={onRemoveListsSpy} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input[type="checkbox"]').simulate('change', {
    target: { checked: false }
  });
  expect(onRemoveListsSpy).toHaveBeenCalled();
});