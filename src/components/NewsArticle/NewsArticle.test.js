import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('News Article', () => {
  it('should match the snapshot', () => {
    const mockArticle = {
      id: 1,
      headline: 'mock headline',
      description: 'mock description',
      img: 'mock image filepath',
      url: 'mock url'
    }
    const wrapper = shallow(<NewsArticle story={mockArticle}/>)

    expect(wrapper).toMatchSnapshot();
  });
});