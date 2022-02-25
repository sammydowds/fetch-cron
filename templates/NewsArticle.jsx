import React from 'react'

const NewsArticle = ({ article }) => {
  return (
    <p>
        <strong>{article.title}</strong>
        <br></br>
        {article.content}
        <br></br>
        <a href={article.link}>Read Here</a>
    </p>
  )
}

export default NewsArticle