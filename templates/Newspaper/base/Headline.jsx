/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    padding: 10
}

const headline = {
    fontSize: '55px'
}

// TODO: wire in top story from npr 
const Headline = (props) => {
  return (
        <tr>
            <td align='center' style={container}>
                <h2 style={headline}>Massive success for startup company in the wake</h2>
                <p>Some content summarizing the headline. Read more</p>
            </td>
        </tr>
  )
}

export default Headline