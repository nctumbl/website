import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import TiDocText from 'react-icons/lib/ti/document-text'

const PDF = styled.iframe`
  margin-top: 30px;
  width: 100%;
  min-height: 600px;
`

const ResearchPage = () => (
  <Container className="text-center">
    <PDF
      src={withPrefix('/resources/MBL-researchIntro.pdf')}
    />
    <h3><a href={withPrefix('/resources/MBL-researchIntro.pdf')} target="_blank"><TiDocText/> Open In New Tab</a></h3>
  </Container>
)

export default ResearchPage