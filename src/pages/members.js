import React, { Component } from 'react'
import {
  Container, Row, Col,
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from 'reactstrap'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import { startCase } from 'lodash';

import Banner from '../components/Banner'
import { log } from 'util';

const Avatar = styled.img`
  min-height: 300px;
  max-height: 300px;
`

const NthRow = ({ nthMembers }) => (
  <Row className="text-center" style={{ paddingTop: '20px' }}>
    <Col xs={12}><h5>{nthMembers.n_th}th</h5></Col>
    { nthMembers.members.map((member, i) => (
      <Col xs={12} sm={6} key={i}>
        <Avatar
          src={withPrefix(`/images/members/${nthMembers.n_th}th/${member.avatar}`)}
          className="img-thumbnail"
          style={{ marginBottom: '20px' }}
        />
        <h5><b>{ member.name }</b></h5>
        <h6>{ member.name_en }</h6>
        <p className="text-truncate">
          <b>Mail</b>
          <a href={`mailto:${member.mail}`}> { member.mail }</a>
        </p>
      </Col>
    ))}
  </Row>
)

const Profile = ({ id, name, avatar = "", mail }) => {
  const avatarSrc = avatar
    ? `/images/members/phd/${avatar}`
    : `/images/members/default.jpg`

  return (
    <Col xs={12} sm={3} key={id}>
      <Avatar
        src={withPrefix(avatarSrc)}
        className="img-thumbnail"
        style={{ marginBottom: '20px' }}
      />
      <h5><b>{ name }</b></h5>
      <p className="text-truncate">
        <b>Mail</b>
        { mail &&
            <a href={`mailto:${mail}`}> { mail }</a>
        }
        { !mail &&
          ' None'
        }
      </p>
    </Col>
  )
}

class MembersPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'Current Member'
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(activeTab) {
    this.setState({ activeTab })
  }

  render() {
    const { members, phds, alumnis, inServices } = this.props.data;

    const memberEdges = members.edges
    const otherMemberEdges = memberEdges.slice() // copy
    const currentMemberEdges = otherMemberEdges.splice(0, 2)

    return (
      <div>
        <Banner
          title="THE MBL TEAM"
          contents={[
            "Regardless of your background",
            "As long as you have enthusiasm and willingness to learn",
            "Welcome to join us !"
          ]}
        />
        <Container>
          <Row>
            <Col sm={4} className="text-center">
              <p><img src={withPrefix("/images/members/kwang.jpg")} className="img-thumbnail" /></p>
              <p>Pr. Kuochen Wang</p>
              <p>王國禎 教授</p>
            </Col>
            <Col sm={8}>
              <h4><b>指導教授 / Advisor</b></h4>
              <div style={{ textIndent: '1em' }}>
                <p>曾擔任 交通大學資訊工程學系 系主任</p>
                <p>曾擔任 教育部網通前瞻技術推動聯盟中心 主持人</p>
                <p>曾擔任 資訊科學與工程研究所及網路工程研究所 所長</p>
              </div>
              <dl className="row">
                <dt className="col-sm-2">Site</dt><dd className="col-sm-10"><a href="https://www.cs.nctu.edu.tw/cswebsite/members/detail/kwang" target="_blank">CS@NCTU</a></dd>
                <dt className="col-sm-2">Office</dt><dd className="col-sm-10">工程三館 332A</dd>
                <dt className="col-sm-2">Phone</dt><dd className="col-sm-10">03-5712121 # 31363</dd>
                <dt className="col-sm-2">Mail</dt><dd className="col-sm-10"><a href="mailto:kwang@cs.nctu.edu.tw">kwang@cs.nctu.edu.tw</a></dd>
              </dl>
            </Col>
          </Row>
        </Container>
        <div className="bg-light" style={{ padding: '30px 0' }}>
          <h4 className="text-center"><b>學生 / Students</b></h4>
          <Container>
            <Nav tabs>
             {[
                "Current Member",
                "Graduated",
                "Phds",
                "In Services",
                "Alumnis"
              ].map( type => (
                <NavItem key={type}>
                  <NavLink
                    className={this.state.activeTab === `${type}` && "active" || ""}
                    onClick={() => { this.toggle(type); }}
                  >
                    { type }
                  </NavLink>
                </NavItem>
              ))
             }
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="Current Member">
              <Row>
              { currentMemberEdges
                .map(edge => edge.node)
                .map(node => (
                  <Col xs={12} sm={6} key={node.n_th}>
                    <NthRow nthMembers={node} />
                  </Col>
                ))
              }
              </Row>
              </TabPane>
              <TabPane tabId="Graduated">
              { otherMemberEdges
                .map(edge => edge.node)
                .map(node => (
                  <NthRow nthMembers={node} key={node.n_th} />
                ))
              }
              </TabPane>
              <TabPane tabId="Phds">
                <Row className="text-center" style={{ paddingTop: '20px' }}>
                { phds.edges
                  .map(edge => edge.node)
                  .map(node => (
                    <Profile { ...node } key={node.id} />
                  ))
                }
                </Row>
              </TabPane>
              <TabPane tabId="In Services">
              <Row className="text-center" style={{ paddingTop: '20px' }}>
                { inServices.edges
                  .map(edge => edge.node)
                  .map(node => (
                    <Profile { ...node } key={node.id} />
                  ))
                }
                </Row>
              </TabPane>
              <TabPane tabId="Alumnis">
                <ListGroup>
                { alumnis.edges
                  .map(edge => edge.node)
                  .map(({ id, n_th, members }) => (
                    <ListGroupItem key={id}>
                      <ListGroupItemHeading>{n_th}th</ListGroupItemHeading>
                      <ListGroupItemText>
                        { members.join(', ') }
                      </ListGroupItemText>
                    </ListGroupItem>
                  ))
                }
                </ListGroup>
              </TabPane>
            </TabContent>
          </Container>
        </div>
      </div>
    )
  }
}

export default MembersPage

export const query = graphql`
  query MemberQuery {
    members: allMembersJson(
      sort: { fields: [n_th], order: DESC }
    ) {
      edges {
        node {
          n_th
          members {
            name
            name_en
            avatar
            mail
            intro
          }
        }
      }
    }
    phds: allPhdJson {
      edges {
        node {
          id
          name
          avatar
          mail
        }
      }
    }
    alumnis: allAlumniJson {
      edges {
        node {
          id
          n_th
          members
        }
      }
    }
    inServices: allInServiceJson {
      edges {
        node {
          id
          name
          mail
        }
      }
    }
  }
`