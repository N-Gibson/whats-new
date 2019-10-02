import React from 'react';
import './NewsArticle.css';

const NewsArticle = (story) => {
  return (
  <div>
    <img src={story.story.img}/>
    <h2>{story.story.headline}</h2>
    <p>{story.story.description}</p>
    <a href={story.story.url}>Link To Article</a>
  </div>
  )
}

export default NewsArticle;