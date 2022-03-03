/** @jsx jsx */
import { jsx } from '@emotion/react'
import LargeArticle from '../base/LargeArticle'

const ExampleLargeArticle = () => {
  return (
    <LargeArticle 
        title='Today the baseball league had a strike'
        summary='Gibberish about how in 1987 there is a strike and the league shut down. It was a sad time for baseball'
        link='https//www.espn.com'
    />
  )
}

export default ExampleLargeArticle