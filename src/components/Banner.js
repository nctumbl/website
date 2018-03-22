import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  min-height: 500px;
  
  font-family: Arvo;
  text-align: center;
  text-shadow: 1px 1px #888888;
`

const BannerH1 = styled.h1`
`

const InfoBox = styled.div`
  margin: auto;
`

export default ({
  title, subtitle, contents
}) => (
  <BannerWrapper className="bg-deepinfo">
    <InfoBox className="text-deepinfo">
    { title && <h1><b>{ title }</b></h1> }
    { subtitle && <h4>{ subtitle }</h4> }
    { contents && contents.map(c => <p>{c}</p>)}
    </InfoBox>
  </BannerWrapper>
)