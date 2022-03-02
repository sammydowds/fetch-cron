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

const FooterTable = (props) => {
  return (
    <table role="presentation" style={table}>
        <tr>
            <td align='center' style={container}>
                <p>Thank you for reading :)</p>
            </td>
        </tr>
    </table>
  )
}

export default FooterTable