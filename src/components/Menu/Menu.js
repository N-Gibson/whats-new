import React, { Component } from 'react';
import './Menu.css'

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
          className = 'nav-button' 
          data-category='local' 
          onClick={event => this.chooseNews(event)}>Local
        </button>
        <button 
          className = 'nav-button'
          data-category='technology'  
          onClick={event => this.chooseNews(event)}>Technology
        </button>
        <button 
          className = 'nav-button'
          data-category='entertainment'  
          onClick={event => this.chooseNews(event)}>Entertainment
        </button>
        <button 
          className = 'nav-button'
          data-category='science' 
          onClick={event => this.chooseNews(event)}>Science
        </button>
        <button 
          className = 'nav-button'
          data-category='health'  
          onClick={event => this.chooseNews(event)}>Health
        </button>
      </nav>
    )
  }
}

export default Menu;