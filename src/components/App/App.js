import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    let news = this.state.local.map((article, i) => <NewsContainer key={`article ${i}`} story={article}/>)
    return (
      <div className="app">
      {news}
      </div>
    );
  }
}

export default App;