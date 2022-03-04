/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

const Article = ({ title, summary, link }) => {
  return (
    <React.Fragment>
        <h2>{title}</h2>
        <p>{summary.split('<')[0]}</p>
        <a href={link}>Read More</a>
    </React.Fragment>
  )
}

export default Article