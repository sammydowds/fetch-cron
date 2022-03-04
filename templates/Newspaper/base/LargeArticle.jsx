/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

const LargeArticle = ({ title, summary, link }) => {
  return (
    <React.Fragment>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{__html: summary}} />
        <a href={link}>Read More</a>
    </React.Fragment>
  )
}

export default LargeArticle