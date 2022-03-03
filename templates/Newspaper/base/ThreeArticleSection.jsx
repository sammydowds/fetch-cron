/** @jsx jsx */
import { jsx } from '@emotion/react'
import ExampleArticle from '../examples/ExampleArticle'

const container = {
    width: '100%',
    background: 'white',
    padding: '30px 0px'
}

const articleContainer = {
    display: 'inline-block',
    padding: 20,
    width: '30%',
    textAlign: 'left'
}

const ThreeArticleSection = (props) => {
  return (
    <tr>
        <td align="center" style={container}>
            <div css={articleContainer}>
                <ExampleArticle />
            </div>
            <div css={articleContainer}>
                <ExampleArticle />
            </div>
            <div css={articleContainer}>
                <ExampleArticle />
            </div>
        </td>
    </tr>
  )
}

export default ThreeArticleSection