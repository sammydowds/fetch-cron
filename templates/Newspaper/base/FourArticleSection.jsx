/** @jsx jsx */
import { jsx } from '@emotion/react'
import SmallArticle from './SmallArticle'

const container = {
    width: '100%',
    background: 'white',
    padding: '30px 0px'
}

const articleContainer = {
    display: 'inline-block',
    padding: 20,
    width: '20%',
    textAlign: 'left',
    verticalAlign: 'top'
}

const sectionContainer = {
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
}

const FourArticleSection = ({ articles }) => {
  return (
    <tr>
        <td style={container}>
            <div style={sectionContainer}>
                <div align="center">
                    {
                        articles.map((article) => {
                            return (
                                <div key={article.title} css={articleContainer}>
                                    <SmallArticle 
                                        title={article.title}
                                        link={article.link}
                                        sectionTitle={article.sectionTitle}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </td>
    </tr>
  )
}

export default FourArticleSection