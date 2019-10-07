import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (story) => {
  return (
    story.news.currentCategory.map((article, i) => <NewsArticle key={`article ${i}`} story={article}/>)
  )
}

export default NewsContainer;