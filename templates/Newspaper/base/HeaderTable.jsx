/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from './Article'

const table = {
    width: '100%',
    border: '1px solid black',
    borderSpacing: 0,
    background: 'white'
}

const container = {
    padding: 0
}

const HeaderTable = (props) => {
  return (
    <table role="presentation" style={table}>
        <tr>
            <td align='center' style={container}>
                <h1>Dowds Daily</h1>
            </td>
        </tr>
    </table>
  )
}

export default HeaderTable