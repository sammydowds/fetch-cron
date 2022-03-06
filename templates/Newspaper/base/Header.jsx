/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    width: '100%',
    borderBottom: '1px solid lightgray'
}

const Header = (props) => {
  return (
    <tr>
        <td align="center" style={container}>
            <h1>Dowds Daily</h1>
        </td>
    </tr>
  )
}

export default Header