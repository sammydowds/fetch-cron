/** @jsx jsx */
import { jsx } from '@emotion/react'

const articleContainer = {
  padding: '10px 30px',
  display: 'inline'
}

const Article = (props) => {
  return (
    <div style={articleContainer}>
        <h2>Article Title</h2>
        <p>Summary about the article. Details on what this article is about.</p>
    </div>
  )
}

export default Article