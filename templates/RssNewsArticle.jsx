import React from 'react'

const RssNewsArticle = ({ article, sectionTitle }) => {
  return (
    <div>
      <small>{sectionTitle}</small>
      <p>
        <strong>{article.title}</strong>
        <br></br>
        {article.content}
        <br></br>
        <a href={article.link}>Read Here</a>
      </p>
    </div>
  )
}

export default RssNewsArticle