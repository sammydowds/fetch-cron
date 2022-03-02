/** @jsx jsx */
import { jsx } from '@emotion/react'
import MultipleArticleRow from './base/MultipleArticleRow'
import Paper from './base/Paper'
import Header from './base/Header'
import Footer from './base/Footer'
import Headline from './base/Headline'

const Newspaper = () => {
  return (
    <Paper>
        <Header />
        <Headline />
        <MultipleArticleRow />
        <MultipleArticleRow />
        <MultipleArticleRow />
        <Footer />
    </Paper>
  )
}

export default Newspaper