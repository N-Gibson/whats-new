import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot with all of the correct data', () => {
    const wrapper = shallow(<Menu pickNews={jest.fn()}/>)

    expect(wrapper).toMatchSnapshot();
  });
})