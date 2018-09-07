import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import TiDocText from 'react-icons/lib/ti/document-text'

const PDF = styled.object.attrs({
  type: "application/pdf"
})`
  margin: 0;
  width: 100%;
  height: calc(100vh - 84px);
`

const ResearchPage = () => (
  <PDF
    data={withPrefix('/resources/MBL-researchIntro.pdf')}
  >
    <h3 className="text-center" style={{ marginTop: '2em'}}>
      <a
        href={withPrefix('/resources/MBL-researchIntro.pdf')} target="_blank"
      >
        <TiDocText/>Open Research PDF
      </a>
    </h3>
  </PDF>
)

export default ResearchPage
