import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    let newsArticle = this.state.local.map((article, i) => <NewsArticle key={`article ${i}`} story={article}/>)
    return (
      <div className="app">
      {newsArticle}
      </div>
    );
  }
}

export default App;