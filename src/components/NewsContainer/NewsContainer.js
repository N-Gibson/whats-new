import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (story) => {
  return (
    story.news.science.map((article, i) => <NewsArticle key={`article ${i}`} story={article}/>)
  )
}

export default NewsContainer;