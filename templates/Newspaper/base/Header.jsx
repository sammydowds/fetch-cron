/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    width: '100%',
    borderBottom: '1px solid lightgray'
}

const headline = {
  fontStyle: 'italic',
  fontSize: 18,
  fontWeight: 'lighter',
  marginBottom: 0
}

const formattedDateStyle = {
  fontSize: 12,
  fontWeight: 'lighter',
  color: 'gray',
  padding: 0,
  margin: '0px 0px 10px 0px'
}

// TODO: update header to be image hosted by s3 (branding)
const Header = (props) => {
  const date = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options)
  return (
    <tr>
        <td align="center" style={container}>
            <h1 style={headline}>DOWDS DAILY</h1>
            <p style={formattedDateStyle}>{formattedDate}</p>
        </td>
    </tr>
  )
}

export default Header