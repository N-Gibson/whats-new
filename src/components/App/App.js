import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      entertainment, 
      science,
      health,
      currentCategory: local,
      categoryName: local
    }
  }

  pickNews = (category) => {
    this.setState({ currentCategory: this.state[category] });

    this.setState({ categoryName : this.state[category] })
  }

  searchNews = (inputValue) => {
    const category = this.state.currentCategory.filter(article => article.description.toLowerCase().includes(inputValue) || article.headline.toLowerCase().includes(inputValue));

    if(category === [] || inputValue === '') {
      this.setState({ currentCategory: this.state.categoryName})
    } else {
      this.setState({ currentCategory: category})
    }
  }

  runOnEnter = (event) => {
    const inputValue  = event.target.parentNode.firstChild.value.toLowerCase();
    if(event.key === 'Enter') {
      this.searchNews(inputValue)
    }
  };

  render () {
    return (
      <main className='main'>
        <div className='header'>
          <h1>What's <span className='h1-span'>New?</span></h1>
          <SearchForm searchNews={this.searchNews} onEnter={this.runOnEnter}/>
        </div>
        <Menu pickNews={this.pickNews}/>
        <div className='news-container'>
          <NewsContainer news={this.state}/>
        </div>
      </main>
    );
  }
}

export default App;