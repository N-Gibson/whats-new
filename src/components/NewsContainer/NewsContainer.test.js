import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import local from '../../data/local';

describe('News Container', () => {
  it('should match the snapshot with all of the correct data', () => {
    const mockData =  { news: { currentCategory: [ {id: 1,
      headline: 'mock headline',
      img: 'mock img filepath',
      description: 'mock description',
      url: 'mock url' }, {id: 2,
      headline: 'mock headline',
      img: 'mock img filepath',
      description: 'mock description',
      url: 'mock url'
      } ] } } 

    const wrapper = shallow(<NewsContainer news={mockData}/>)

    expect(wrapper).toMatchSnapshot();
  });
});