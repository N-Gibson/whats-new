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

  // it('should be able to pick news', () => {

  // Need to mock the state better so that the method pick news can have the appropriate keys to dig through


  //   const data = {
  //     id: 1,
  //     headline: 'Breaking News',
  //     img: 'src...',
  //     description: 'Something happened',
  //     url: 'url...'
  //   }
  //   const expected = [data]
  //   wrapper.instance().pickNews(data)

  //   console.log(wrapper.state('currentCategory'))
  //   expect(wrapper.state('currentCategory')).toEqual(expected)
  // })

  it('should be able to search through news', () => {
    
  });
});
