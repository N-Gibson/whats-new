import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      entertainment, 
      science,
      health
    }
  }

  pickNews = (category) => {
    this.setState( { [category]: this.state[category] } );
    console.log(this.state);
  }

  render () {
    return (
      <main className='main'>
        <h1>What's <span className='h1-span'>New?</span></h1>
        <input type='text'></input>
        <button>Search Now</button>
        <Menu pickNews={this.pickNews}/>
        <NewsContainer news={this.state}/>
      </main>
    );
  }
}

export default App;