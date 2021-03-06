/** @jsx jsx */
import { jsx } from '@emotion/react'

const table = {
    width: 600,
    border: '1px solid #a67c00',
    borderSpacing: 0,
    background: 'white'
}

const Paper = (props) => {
  return (
    <table role="presentation" style={table}>
        {props.children}
    </table>
  )
}

export default Paper