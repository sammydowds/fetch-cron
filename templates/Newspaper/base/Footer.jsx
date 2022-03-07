/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    width: '100%',
    fontSize: 10,
    color: 'gray',
    height: 20
}

const Footer = ({ pageNumber = 1}) => {
  return (
    <tr>
        <td align="center" style={container}>
            {pageNumber}
        </td>
    </tr>
  )
}

export default Footer