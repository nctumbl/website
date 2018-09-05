import React from 'react'
import {
  Container, Row, Col,
  ListGroup, ListGroupItem } from 'reactstrap';
import { withPrefix } from 'gatsby-link'
import TiDownload from 'react-icons/lib/ti/download'
import Banner from '../components/Banner'

const ResourcesPage = ({ data }) => (
  <div>
    <Banner
      title="RESOURCES"
      subtitle="研究資源"
    />
    <h1 className="text-center">研究相關文件</h1>
    <Container>
      <ListGroup>
        { data.resources.edges
          .map(edge => edge.node)
          .map((node, i) => (
            <ListGroupItem action key={i}>
              <Row>
                <Col xs={11}>{i}. {node.name}</Col>
                <Col xs={1}>
                  <a href={withPrefix(`/resources/${node.relativePath}`)} target="_blank">
                    <TiDownload />
                  </a>
                </Col>
              </Row>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Container>
  </div>
)

export default ResourcesPage

export const query = graphql`
  query ResourcesQuery {
    resources: allFile(filter: { sourceInstanceName: {eq: "resources"}}) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
  }
`
