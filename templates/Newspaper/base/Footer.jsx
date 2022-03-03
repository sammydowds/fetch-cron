/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    width: '100%',
    borderTop: '1px solid lightgray'
}

const Footer = (props) => {
  return (
    <tr>
        <td align="center" style={container}>
            <p>Thanks for reading :)</p>
        </td>
    </tr>
  )
}

export default Footer