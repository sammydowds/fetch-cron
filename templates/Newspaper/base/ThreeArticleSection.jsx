/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from './Article'

const container = {
    width: '100%',
    background: 'white',
    padding: '30px 0px'
}

const articleContainer = {
    display: 'inline-block',
    padding: 20,
    width: '30%',
    textAlign: 'left',
    verticalAlign: 'top'
}

const ThreeArticleSection = ({ articles }) => {
  return (
    <tr>
        <td align="center" style={container}>
            {
                articles.map((article) => {
                    return (
                        <div key={article.title} css={articleContainer}>
                            <Article 
                                title={article.title}
                                summary={article.content}
                                link={article.link}
                            />
                        </div>
                    )
                })
            }
        </td>
    </tr>
  )
}

export default ThreeArticleSection