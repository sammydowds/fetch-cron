/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'

const sectionTitleText = {
  color: 'grey',
  fontSize: '10px',
}

const header = {
  marginTop: 5,
  fontSize: '14px',
  fontWeight: 'lighter'
}

const linkStyle = {
  fontSize: '14px'
}

const SmallArticle = ({ sectionTitle, title, link }) => {
  return (
    <React.Fragment>
        {sectionTitle && <span style={sectionTitleText}>{sectionTitle}</span>}
        <h2 style={header}>{title}</h2>
        <a style={linkStyle} href={link}>Read More</a>
    </React.Fragment>
  )
}

export default SmallArticle