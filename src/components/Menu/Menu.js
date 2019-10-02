import React, { Component } from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
class Menu extends Component {
  constructor() {
    super()
  }
  
  chooseNews = (event) => {
    event.preventDefault();
    this.props.pickNews(event.target.dataset.category)
  }

  render() {
    return (
      <nav>
        <button 
          data-category='local' 
          onClick={event => this.chooseNews(event)}>Local
        </button>
        <button 
          data-category='technology' 
          onClick={event => this.chooseNews(event)}>Technology
        </button>
        <button 
          data-category='entertainment' 
          onClick={event => this.chooseNews(event)}>Entertainment
        </button>
        <button 
          data-category='science' 
          onClick={event => this.chooseNews(event)}>Science
        </button>
        <button 
          data-category='health' 
          onClick={event => this.chooseNews(event)}>Health
        </button>
      </nav>
    )
  }
}

export default Menu;