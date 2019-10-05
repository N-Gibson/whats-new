import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to pick news', () => {

  // Need to mock the state better so that the method pick news can have the appropriate keys to dig through

    const local = {
      id: 1,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }

    wrapper.instance().pickNews('local')

    console.log(wrapper.state('currentCategory'))
    expect(wrapper.state('currentCategory')).toEqual(local)
  })

  it('should be able to search through news', () => {

    wrapper.instance().setState( { currentCategory: { id: 1,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...' } } );

    wrapper.instance().searchNews('spider');

    expect(wrapper.state('currentCategory')).toEqual([])

    wrapper.instance().setState( { currentCategory: { id: 1,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...' } } );

      wrapper.instance().searchNews('Breaking');

      expect(wrapper.state('currentCategory')).toEqual({ id: 1,
        headline: 'Breaking News',
        img: 'src...',
        description: 'Something happened',
        url: 'url...' })
  });
});
