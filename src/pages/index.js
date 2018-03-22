import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Banner from '../components/Banner'

const CircleWrapper = styled.div`
  padding-bottom: 30px;
`

const Circle = styled.div`
  display: flex;
  width: 100%;
  height: 200px;

  border-radius: 50%;
  padding: 30px;

`

const LinkedInfo = styled(Link)`
  margin: auto;

  font-weight: bold;
  text-align: center;
`

const StyledRow = styled(Row)`
  &::before {    
    position: absolute;
    top: calc(200px / 2);
    left: calc(300px / 2);

    height: calc(100% - 200px);
    width: calc(100% - 300px);
    
    border: solid gray;
    border-radius: 50%;
    content: '';
  }
`

export default () => (
  <div>
    <Banner
      title="MBL"
      subtitle="Mobile Computing and Broadband Networking Laboratory"
      contents={[
        "行動計算與寬頻網路實驗室",
        "雲端計算 軟體定義網路 物聯網 大數據分析",
        "成立於1991年"
      ]}
    />
    <h1 className="text-deepLinkedinfo text-center">Research Interests</h1>
    <Container style={{position: 'relative'}}>
      <StyledRow>
        <Col sm={{offset: 3, size: 6}}>
          <CircleWrapper>
            <Circle className="bg-danger">
              <LinkedInfo className="text-white" to="/projects/">
                <span>
                  Internet of Things<br/>
                  (IoTs)
                </span>
              </LinkedInfo>
            </Circle>
          </CircleWrapper>
        </Col>
        <Col sm={6}>
          <CircleWrapper>
            <Circle className="bg-primary">
              <LinkedInfo className="text-white" to="/projects/">SDN / NFV / 5G</LinkedInfo>
            </Circle>
          </CircleWrapper>
        </Col>
        <Col sm={6}>
          <CircleWrapper>
            <Circle className="bg-warning">
              <LinkedInfo className="text-white" to="/projects/">Big Data</LinkedInfo>
            </Circle>
          </CircleWrapper>
        </Col>
        <Col sm={{offset: 3, size: 6}}>
          <CircleWrapper>
            <Circle className="bg-success">
              <LinkedInfo className="text-white" to="/projects/">Cloud / Fog Computing</LinkedInfo>
            </Circle>
          </CircleWrapper>
        </Col>
      </StyledRow>
    </Container>
  </div>
)
