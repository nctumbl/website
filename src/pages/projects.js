import React from 'react'
import styled from 'styled-components'
import {
  Row,
  Col
} from 'reactstrap'
import Banner from '../components/Banner'

const DL = ({ children }) => (
  <dl className="row">{ children }</dl>
)

const DT = ({ children }) => (
  <dt className="col-sm-3">{ children }</dt>
)

const DD = ({ children }) => (
  <dd className="col-sm-9">{ children }</dd>
)

const Project = ({ project }) => (
  <DL>
    <DT>名稱</DT><DD>{project.name}</DD>
    <DT>編號</DT><DD>{project.id}</DD>
    <DT>執行期限</DT><DD>{project.duration}</DD>
    <DT>補助單位</DT><DD>{project.supporter}</DD>
  </DL>
)

const Striped = styled.div`
  padding: 20px 0;
`

const Projects = ({ data }) => (
  <div>
    <Banner
      title="PROJECT"
      subtitle="研究計畫"
    />
    { data.projects.edges
      .map(edge => edge.node)
      .map(({ id, category, content }, i) => (
        <Striped className={i % 2 && "bg-light" || ""} key={id}>
          <Col xs={12} sm={{ offset: 2, size: 8 }}>
          <h1 className="text-center">{category}</h1>
          <hr />
          { content.map(p => (
            <Project project={p} key={`${p.id}${p.name}`} />
          ))}
          </Col>
        </Striped>
      )
    )}
    { data.papers.edges
      .map(edge => edge.node)
      .map(({ id, category, content }, i) => (
        <Striped className={i % 2 && "bg-light" || ""} key={id}>
          <Col xs={12} sm={{ offset: 2, size: 8 }}>
          <h1 className="text-center">{category}</h1>
          <hr />
          <ul>
          { content.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
          </ul>
          </Col>
        </Striped>
      ))
    }
  </div>
)

export default Projects

export const query = graphql`
  query IndexQuery {
    projects: allProjectsJson {
      edges {
        node {
          id
          category
          content {
            id
            name
            duration
            supporter
          }
        }
      }
    }
    papers: allPapersJson {
      edges {
        node {
          id
          category
          content
        }
      }
    }
  }
  
`