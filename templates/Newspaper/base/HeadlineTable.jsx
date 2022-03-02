/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from './Article'

const table = {
    width: '100%',
    borderSpacing: 0,
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    background: 'white'
}

const container = {
    padding: 10
}

const HeadlineTable = (props) => {
  return (
    <table role="presentation" style={table}>
        <tr>
            <td align='center' style={container}>
                <h2>Headline Goes Here</h2>
                <p>Some content summarizing the headline. Read more</p>
            </td>
        </tr>
    </table>
  )
}

export default HeadlineTable