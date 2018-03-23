import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withPrefix } from 'gatsby-link'
import Banner from '../components/Banner'

const CoursesPage = () => (
  <div>
    <Banner
      title="COURSES"
      subtitle="課程"
    />
    <Container className="text-center">
      <Row>
        <Col md={3}>
          <img src={withPrefix(`/images/courses/cloud.png`)}/>
          <div style={{ marginTop: '30px' }}>
            <h5><b>雲端計算</b></h5>
            <h6>Cloud Computing</h6>
          </div>
        </Col>
        <Col>
          <img src={withPrefix(`/images/courses/network.png`)}/>
          <div style={{ marginTop: '30px' }}>
            <h5><b>計算機網路</b></h5>
            <h6>Computer Networks</h6>
          </div>
        </Col>
        <Col>
          <img src={withPrefix(`/images/courses/communication.png`)}/>
          <div style={{ marginTop: '30px' }}>
            <h5><b>通訊原理</b></h5>
            <h6>Principles of communications netowrks</h6>
          </div>
        </Col>
        <Col>
          <img src={withPrefix(`/images/courses/paper.png`)}/>
          <div style={{ marginTop: '30px' }}>
            <h5><b>論文研討</b></h5>
            <h6>Seminar</h6>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default CoursesPage