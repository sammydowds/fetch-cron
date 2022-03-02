/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from './Article'

const container = {
    width: '100%',
    background: 'white',
}

const articleContainer = {
    display: 'inline-block',
    padding: 10
}

const MultipleArticleRow = (props) => {
  return (
    <tr>
        <td style={container}>
            <div style={articleContainer}>
                <Article />
            </div>
            <div style={articleContainer}>
                <Article />
            </div>
            <div style={articleContainer}>
                <Article />
            </div>
        </td>
    </tr>
  )
}

export default MultipleArticleRow