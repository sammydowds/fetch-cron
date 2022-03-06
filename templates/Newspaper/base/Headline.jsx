/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    padding: 10
}

const headline = {
    fontSize: '26px',
    marginBottom: '16px'
}

const Headline = ({ article }) => {
  return (
        <tr>
            <td align='center' style={container}>
                <h2 style={headline}>{article.title}</h2>
                <a href={article.link}>Read More</a>
            </td>
        </tr>
  )
}

export default Headline