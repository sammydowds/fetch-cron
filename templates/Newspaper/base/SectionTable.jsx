/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from './Article'

const table = {
    width: '100%',
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    borderSpacing: 0,
    background: 'white'
}

const container = {
    padding: 10
}

const SectionTable = (props) => {
  return (
    <table role="presentation" style={table}>
        <tr>
            <td style={container}>
                <Article />
            </td>
            <td style={container}>
                <Article />
            </td>
            <td style={container}>
                <Article />
            </td>
        </tr>
    </table>
  )
}

export default SectionTable