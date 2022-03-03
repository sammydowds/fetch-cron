/** @jsx jsx */
import { jsx } from '@emotion/react'
import ExampleLargeArticle from '../examples/ExampleLargeArticle'
import ExampleArticle from '../examples/ExampleArticle'

const container = {
    width: '100%',
    background: 'white',
}

const smallRailContainer = {
    verticalAlign: 'top',
    display: 'inline-block'
}

const largeRailContainer = {
    minWidth: '70%',
    padding: 10,
    borderRight: '1px solid lightgray',
    display: 'inline-block'
}

const smallRailItem = {
    padding: 20,
    width: '100%'
}

const largeRailItem = {
    minHeight: 200,
    padding: '10px 40px'
}

const Rail = (props) => {
  return (
    <tr>
        <td style={container}>
            <div style={largeRailContainer}>
                <div css={largeRailItem}>
                    <ExampleLargeArticle />
                </div>
                <div css={largeRailItem}>
                    <ExampleLargeArticle />
                </div>
                <div css={largeRailItem}>
                    <ExampleLargeArticle />
                </div>
            </div>
            <div style={smallRailContainer}>
                <div css={smallRailItem}>
                    <p>Something here</p>
                </div>
                <div css={smallRailItem}>
                    <p>Something here</p>
                </div>
                <div css={smallRailItem}>
                    <p>Something here</p>
                </div>
            </div>
        </td>
    </tr>
  )
}

export default Rail