/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from '../base/Article'

const ExampleArticle = () => {
  return (
    <Article 
        title='Today the baseball league had a strike'
        summary='Gibberish about how in 1987 there is a strike and the league shut down. It was a sad time for baseball'
        link='https//www.espn.com'
    />
  )
}

export default ExampleArticle