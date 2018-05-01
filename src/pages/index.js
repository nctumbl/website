import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link, { withPrefix } from 'gatsby-link'
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

const Info = styled.div`
  margin: auto;
  
  font-weight: bold;
  text-align: center;
`

const RowWCircleBg = styled(Row)`
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

const FlexCol = styled(Col)`
  display: flex;
  text-align: center;
`

const FlexColText = styled.div`
  margin: auto;

  text-align: center;
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
    <h1 className="text-deepinfo text-center">Research Interests</h1>
    <div style={{ padding: '30px 0' }}>
      <Container>
        <Row>
          <Col sm style={{ textAlign: 'center' }}>
            <img src={withPrefix("/images/home/Research.png")} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>

    <div id="sdn" className="bg-light" style={{ padding: '30px 0' }}>
      <Container>
        <Row>
          <FlexCol sm>
            <FlexColText><h3><b>Software Defined Iot Networking with 3i</b></h3></FlexColText>
          </FlexCol>
          <Col sm>
            <img src={withPrefix("/images/home/iotnetwork.png")} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ padding: '30px 0' }}>
      <Container>
        <Row>
          <Col sm>
            <img src={withPrefix("/images/home/5G.png")} className="img-fluid" />
          </Col>
          <FlexCol sm>
            <FlexColText className="text-left">
              <h3><b>5G / Heterogeneous Networking</b></h3>
              <ul>
                <li>Linear Accelerator Assisted mmWave Link Adaptation</li>
                <li>Indoor Localization using mmWare</li>
              </ul>
            </FlexColText>
          </FlexCol>
        </Row>
      </Container>
    </div>
    <div className="bg-light" style={{ padding: '30px 0' }}>
      <Container>
        <Row>
          <FlexCol sm>
            <FlexColText><h3><b>WiGiG / WiFi / LTE-U Integrated Radio Access</b></h3></FlexColText>
          </FlexCol>
          <Col sm>
            <img src={withPrefix("/images/home/radio-access.png")} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
    
  </div>
)
