import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  margin-top: 50px;
  padding: 30px 0;
  font-size: 14px;
  text-align: center;

  p:last-child {
    margin-bottom: 0;
  }
`

export default () => (
  <Footer className="bg-light">
    <p>Copyright © 2018 MBL All Rights Reserved.</p>
    <p>國立交通大學 資訊工程系 行動計算與寬頻網路實驗室 工程三館612室</p>
    <p>電話: (03)5712121 分機: 54790</p>
  </Footer>
)