import React from 'react';
import './NewsContainer.css'

const NewsContainer = (story) => {
  return <div>{story.story.headline}</div>
}

export default NewsContainer;