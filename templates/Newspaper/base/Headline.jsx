/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    padding: 10
}

const headline = {
    fontSize: '26px',
    marginBottom: '16px'
}

const headlineSummary = {
    fontSize: '14px',
    padding: '10px 42px'
}

// TODO: wire in top story from npr 
const Headline = ({ article }) => {
  return (
        <tr>
            <td align='center' style={container}>
                <h2 style={headline}>{article.title}</h2>
                <p style={headlineSummary}>{article.content}</p>
                <a href={article.link}>Read More</a>
            </td>
        </tr>
  )
}

export default Headline