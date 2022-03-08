/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    paddingTop: 30
}

const headline = {
    fontSize: '26px',
    margin: 0,
}

const content = {
    margin: 0,
    maxWidth: '75%',
    margin: '10px 0px'
}

// TODO: rework to have small summary as well 
const Headline = ({ article }) => {
  return (
        <tr>
            <td align='center' style={container}>
                <h2 style={headline}>{article.title}</h2>
                <p style={content}>{article.content}</p>
                <a href={article.link}>Read More</a>
            </td>
        </tr>
  )
}

export default Headline