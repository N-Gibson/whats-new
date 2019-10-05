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
    const data = { localData: {
      id: 1,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }, technologyData : {
      id: 2,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }, entertainmentData: {
      id: 3,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }, scienceData: {
      id: 4,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }, healthData: {
      id: 1,
      headline: 'Breaking News',
      img: 'src...',
      description: 'Something happened',
      url: 'url...'
    }}

    wrapper.setState({local : localData, technology: technologyData, entertainment: entertainmentData, science: scienceData, health: healthData})

    wrapper.instance().pickNews('local')

    expect(wrapper.state('currentCategory')).toEqual(localData)
  })

  it('should be able to search through news', () => {
    wrapper.instance().setState( { currentCategory: [{ id: 1, headline: 'Breaking News', img: 'src...', description: 'Something happened', url: 'url...' }, { id: 2, headline: 'Other news', img: 'src...', description: 'Something happened', url: 'url...' }] } );

    wrapper.instance().searchNews('spider');

    expect(wrapper.state('currentCategory')).toEqual([])

    wrapper.instance().searchNews('Breaking');

    expect(wrapper.state('currentCategory')).toEqual([{ id: 1, headline: 'Breaking News', img: 'src...', description: 'Something happened', url: 'url...' }])
  });
});
