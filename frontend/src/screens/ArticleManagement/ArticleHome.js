import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import ArticleAbout from '../ArticleManagement/About/aboutArticle';


const ArticleHome = () => {
  return (
    <div className='mainTop_article'>
        <Container>
            <Row>
                 <div className='mainTopIntro_article'>
                    <div>
                      ArticleAbout
                    </div>
                 </div>
            </Row>
        </Container>
    </div>
  )
}

export default ArticleHome