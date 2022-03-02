/** @jsx jsx */
import { jsx } from '@emotion/react'

const container = {
    padding: 10
}

const Headline = (props) => {
  return (
        <tr>
            <td align='center' style={container}>
                <h2>Headline Goes Here</h2>
                <p>Some content summarizing the headline. Read more</p>
            </td>
        </tr>
  )
}

export default Headline