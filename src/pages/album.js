import React from 'react'
import {
  Container, Row, Col } from 'reactstrap'
import { withPrefix } from 'gatsby-link'
import Banner from '../components/Banner'

const AlbumPage = ({ data }) => (
  <div>
    <Banner
      title="LIFE PHOTOS"
      subtitle="實驗室生活照"
    />
    <Container className="text-center">
      <Row>
      { data.lifephotos.edges
        .map(edge => edge.node)
        .map(node => (
          <Col xs={6} sm={3}>
            <img
              src={withPrefix(`/images/lifephotos/${node.relativePath}`)}
              className="img-thumbnail img-fluid"
            />
          </Col>
        ))
      }
      </Row>
    </Container>
  </div>
)

export default AlbumPage

export const query = graphql`
  query AlbumQuery {
    lifephotos: allFile(filter: { sourceInstanceName: {eq: "lifephotos"}}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`