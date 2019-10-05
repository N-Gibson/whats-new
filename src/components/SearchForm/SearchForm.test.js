import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('Search Form', () => {
  let searchNews, onEnter, wrapper
  beforeEach(() => {
    searchNews = jest.fn();
    onEnter = jest.fn();
    wrapper = shallow(<SearchForm searchNews={searchNews} onEnter={onEnter}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to search', () => {
    wrapper.instance().search = jest.fn();
    const mockEvent = { target: { parentNode: { firstChild: { value: 'finally the value '} } } };

    wrapper.find('button').simulate('click', mockEvent);
    
    expect(wrapper.instance().search).toHaveBeenCalledWith(mockEvent);
  });

  
  it('should be able to run functions on enter', () => {
    const mockEvent = { target: { parentNode: { firstChild: { value: 'finally the value '} } } };
    const mockRunOnEnter = jest.fn();

    wrapper.find('input').simulate('onKeyDown', mockEvent);

    expect(mockRunOnEnter).toHaveBeenCalledWith(mockEvent)
  });
});