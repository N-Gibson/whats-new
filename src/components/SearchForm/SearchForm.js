import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
  }

  search(event) {
    const inputValue  = event.target.parentNode.firstChild.value.toLowerCase();
    this.props.searchNews(inputValue)
  }

  render() {
    return (
      <div className='search'>
        <input className='search-input' type='text' onKeyDown={event => this.props.onEnter(event)}></input>
        <button className='search-button' onClick={event => this.search(event)}>Search Now</button>
      </div>
    )
  }
}

export default SearchForm;