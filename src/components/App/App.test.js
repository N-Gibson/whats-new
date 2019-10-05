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

    wrapper.setState({local : data.localData, technology: data.technologyData, entertainment: data.entertainmentData, science: data.scienceData, health: data.healthData})

    expect(wrapper.state('local')).toEqual(data.localData);
    expect(wrapper.state('technology')).toEqual(data.technologyData);
    expect(wrapper.state('entertainment')).toEqual(data.entertainmentData);
    expect(wrapper.state('science')).toEqual(data.scienceData);
    expect(wrapper.state('health')).toEqual(data.healthData);
  });

  it('should be able to pick news', () => {
    const localData = { id: 1, headline: 'Breaking News', img: 'src...', description: 'Something happened', url: 'url...' }

    wrapper.instance().pickNews('local')

    expect(wrapper.state('currentCategory')).toEqual(localData)
  });

  it('should be able to search through news', () => {
    wrapper.instance().setState( { currentCategory: [{ id: 1, headline: 'Breaking News', img: 'src...', description: 'Something happened', url: 'url...' }, { id: 2, headline: 'Other news', img: 'src...', description: 'Something happened', url: 'url...' }] } );

    wrapper.instance().searchNews('spider');

    expect(wrapper.state('currentCategory')).toEqual([])

    wrapper.instance().searchNews('Breaking');

    expect(wrapper.state('currentCategory')).toEqual([{ id: 1, headline: 'Breaking News', img: 'src...', description: 'Something happened', url: 'url...' }])
  });
});
